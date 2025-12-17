'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FileText, Link2, Save, ToggleLeft, ToggleRight, Upload, Calendar, AlertTriangle, Trash2, Eye, ExternalLink, CheckCircle, XCircle, Plus, X } from 'lucide-react';
import axios from 'axios';
import Loading from '../Loading';

const PolicyManager = () => {
    const [policies, setPolicies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCreating, setIsCreating] = useState(false);
    
    // Form State
    const [saving, setSaving] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({
        title: '',
        type: 'link', // 'pdf' or 'link'
        url: '',
        isEnabled: true,
        expiryDate: ''
    });

    useEffect(() => {
        fetchPolicies();
    }, []);

    const fetchPolicies = async () => {
        try {
            const { data } = await axios.get('/api/admin/policy-update');
            setPolicies(data.policies || []);
        } catch (error) {
            console.error("Fetch Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleToggleStatus = async (policyId, currentStatus) => {
        try {
            // Optimistic update
            setPolicies(prev => prev.map(p => 
                p._id === policyId ? { ...p, isEnabled: !currentStatus } : p
            ));

            await axios.put('/api/admin/policy-update', {
                id: policyId,
                isEnabled: !currentStatus
            });
        } catch (error) {
            console.error("Toggle Error", error);
            fetchPolicies(); // Revert on error
        }
    };

    const handleDelete = async (policyId) => {
        if (!confirm('Are you sure you want to delete this policy?')) return;

        try {
            setPolicies(prev => prev.filter(p => p._id !== policyId)); // Optimistic
            await axios.delete(`/api/admin/policy-update?id=${policyId}`);
        } catch (error) {
            console.error("Delete Error", error);
            fetchPolicies();
        }
    };

    // --- Form Handlers ---
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.size > 4 * 1024 * 1024) {
            alert('File size must be less than 4MB');
            return;
        }

        if (file.type !== 'application/pdf') {
            alert('Only PDF files are allowed');
            return;
        }

        setSelectedFile(file);
        setFileName(file.name);
    };

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(',')[1]);
            reader.onerror = reject;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        try {
            let payload = {
                title: formData.title || 'Policy Update',
                type: formData.type,
                isEnabled: formData.isEnabled,
                expiryDate: formData.expiryDate || null
            };

            if (formData.type === 'pdf') {
                if (!selectedFile) {
                    alert('Please select a PDF file');
                    setSaving(false);
                    return;
                }
                payload.pdfData = await fileToBase64(selectedFile);
                payload.pdfName = selectedFile.name;
            } else {
                if (!formData.url) {
                    alert('Please enter a URL');
                    setSaving(false);
                    return;
                }
                payload.url = formData.url;
            }

            await axios.post('/api/admin/policy-update', payload);
            alert('Policy created successfully!');
            setIsCreating(false);
            setFormData({ title: '', type: 'link', url: '', isEnabled: true, expiryDate: '' });
            setSelectedFile(null);
            setFileName('');
            fetchPolicies();
        } catch (e) {
            console.error(e);
            alert('Failed to create policy');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <Loading />;

    return (
        <div className="p-6 max-w-5xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Policy Management</h1>
                    <p className="text-slate-500 text-sm">Manage notifications and policy updates</p>
                </div>
                <button 
                    onClick={() => setIsCreating(true)}
                    className="flex items-center gap-2 bg-[#6D3078] hover:bg-[#5a2565] text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-purple-900/10"
                >
                    <Plus size={20} />
                    Create New Policy
                </button>
            </div>

            {/* Create Modal overlay */}
            {isCreating && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-slate-800">Create New Policy</h2>
                            <button onClick={() => setIsCreating(false)} className="p-2 hover:bg-gray-100 rounded-lg text-slate-500">
                                <X size={20} />
                            </button>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            {/* Enable Toggle */}
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                                <div>
                                    <h3 className="font-bold text-slate-800">Start as Active?</h3>
                                    <p className="text-xs text-slate-500">Should this be visible immediately?</p>
                                </div>
                                <button 
                                    type="button"
                                    onClick={() => setFormData({ ...formData, isEnabled: !formData.isEnabled })}
                                    className={`p-2 rounded-lg transition-colors ${formData.isEnabled ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-500'}`}
                                >
                                    {formData.isEnabled ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
                                </button>
                            </div>

                            {/* Title */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    placeholder="e.g. Important Policy Update"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#6D3078] outline-none"
                                />
                            </div>

                            {/* Expiry */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Expiry Date (Optional)</label>
                                <input
                                    type="date"
                                    value={formData.expiryDate}
                                    onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#6D3078] outline-none"
                                />
                            </div>

                            {/* Type Selection */}
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, type: 'pdf' })}
                                    className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                                        formData.type === 'pdf' ? 'border-[#F47E4D] bg-orange-50 text-[#F47E4D]' : 'border-slate-200 text-slate-500'
                                    }`}
                                >
                                    <FileText size={20} /> Upload PDF
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, type: 'link' })}
                                    className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                                        formData.type === 'link' ? 'border-[#6D3078] bg-purple-50 text-[#6D3078]' : 'border-slate-200 text-slate-500'
                                    }`}
                                >
                                    <Link2 size={20} /> Page Link
                                </button>
                            </div>

                            {/* Conditional Content */}
                            {formData.type === 'pdf' ? (
                                <div 
                                    onClick={() => fileInputRef.current?.click()}
                                    className="w-full p-8 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:border-[#F47E4D] hover:bg-orange-50/50 transition-all text-center group"
                                >
                                    <Upload size={32} className="mx-auto text-slate-400 group-hover:text-[#F47E4D] mb-3 transition-colors" />
                                    {fileName ? (
                                        <p className="text-sm text-[#F47E4D] font-bold">{fileName}</p>
                                    ) : (
                                        <p className="text-sm text-slate-500">Click to select PDF (Max 4MB)</p>
                                    )}
                                    <input ref={fileInputRef} type="file" accept=".pdf" onChange={handleFileChange} className="hidden" />
                                </div>
                            ) : (
                                <input
                                    type="url"
                                    required
                                    value={formData.url}
                                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                    placeholder="https://example.com/policy-page"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#6D3078] outline-none"
                                />
                            )}

                            <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
                                <button 
                                    type="button" 
                                    onClick={() => setIsCreating(false)}
                                    className="px-6 py-2.5 rounded-xl text-slate-600 font-medium hover:bg-gray-100 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit" 
                                    disabled={saving}
                                    className="bg-[#6D3078] hover:bg-[#582662] text-white px-8 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-purple-900/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    {saving && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                                    {saving ? 'Creating...' : 'Create Policy'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* List View */}
            <div className="grid gap-4">
                {policies.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
                        <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FileText size={32} className="text-[#6D3078] opacity-50" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">No policies found</h3>
                        <p className="text-slate-500 mb-6">Create a new policy to get started</p>
                        <button 
                            onClick={() => setIsCreating(true)}
                            className="text-[#6D3078] font-bold hover:underline"
                        >
                            Create One Now
                        </button>
                    </div>
                ) : (
                    policies.map((policy) => (
                        <div key={policy._id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center gap-6 group">
                            
                            {/* Icon & Status */}
                            <div className="flex items-start gap-4 flex-1">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                    policy.type === 'pdf' ? 'bg-orange-50 text-[#F47E4D]' : 'bg-purple-50 text-[#6D3078]'
                                }`}>
                                    {policy.type === 'pdf' ? <FileText size={24} /> : <Link2 size={24} />}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-bold text-slate-800 text-lg">{policy.title}</h3>
                                        {policy.isExpired ? (
                                            <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-bold rounded-full">Expired</span>
                                        ) : policy.isEnabled ? (
                                            <span className="px-2 py-0.5 bg-green-100 text-green-600 text-xs font-bold rounded-full">Active</span>
                                        ) : (
                                            <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs font-bold rounded-full">Disabled</span>
                                        )}
                                    </div>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} /> 
                                            Created: {new Date(policy.createdAt).toLocaleDateString()}
                                        </span>
                                        {policy.expiryDate && (
                                            <span className={`flex items-center gap-1 ${policy.isExpired ? 'text-red-500 font-medium' : ''}`}>
                                                <AlertTriangle size={14} /> 
                                                Expires: {new Date(policy.expiryDate).toLocaleDateString()}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-3 pt-4 md:pt-0 border-t md:border-none border-gray-100 w-full md:w-auto justify-end">
                                {/* Toggle */}
                                <button 
                                    onClick={() => handleToggleStatus(policy._id, policy.isEnabled)}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                                        policy.isEnabled ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-green-50 text-green-600 hover:bg-green-100'
                                    }`}
                                >
                                    {policy.isEnabled ? 'Disable' : 'Enable'}
                                </button>

                                {/* View */}
                                {policy.type === 'pdf' && (
                                    <a 
                                        href={`/api/policy-update/download?id=${policy._id}`}
                                        target="_blank"
                                        className="p-2 text-slate-400 hover:text-[#6D3078] hover:bg-purple-50 rounded-lg transition-colors"
                                        title="View PDF"
                                    >
                                        <Eye size={20} />
                                    </a>
                                )}
                                {policy.type === 'link' && (
                                    <a 
                                        href={policy.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 text-slate-400 hover:text-[#6D3078] hover:bg-purple-50 rounded-lg transition-colors"
                                        title="Open Link"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                )}

                                {/* Delete */}
                                <button 
                                    onClick={() => handleDelete(policy._id)}
                                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                    title="Delete"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default PolicyManager;

