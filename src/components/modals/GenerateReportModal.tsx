import React, { useState } from 'react';
import { X, Upload, FileText, Calendar, Building2, DollarSign, TrendingUp, BarChart3, FileSpreadsheet, MessageSquare, ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface GenerateReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GenerateReportModal: React.FC<GenerateReportModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    project: '',
    month: '',
    reportType: 'Asset Management Report',
    files: {
      cashflow: null as File | null,
      occupancy: null as File | null,
      revenue: null as File | null,
      pl: null as File | null,
      notes: null as File | null
    },
    additionalNotes: ''
  });

  const projects = [
    { id: 1, name: 'NOMADE Tulum', location: 'Tulum, Mexico' },
    { id: 2, name: 'NOMADE Holbox', location: 'Holbox, Mexico' },
    { id: 3, name: 'NOMADE Marrakech', location: 'Marrakech, Morocco' },
    { id: 4, name: 'NOMADE Lisboa', location: 'Lisboa, Portugal' },
    { id: 5, name: 'NOMADE Madrid', location: 'Madrid, Spain' },
    { id: 6, name: 'NOMADE Ibiza', location: 'Ibiza, Spain' }
  ];

  const reportTypes = [
    'Asset Management Report',
    'Performance Report',
    'Investment Report',
    'Development Report',
    'Financial Analysis Report',
    'Market Analysis Report'
  ];

  const fileTypes = [
    { key: 'cashflow', label: 'Cash Flow', icon: DollarSign, description: 'Monthly cash flow statements and projections' },
    { key: 'occupancy', label: 'Occupancy Data', icon: TrendingUp, description: 'Occupancy rates, ADR, and RevPAR data' },
    { key: 'revenue', label: 'Revenue Reports', icon: BarChart3, description: 'Revenue breakdown by department' },
    { key: 'pl', label: 'P&L Statements', icon: FileSpreadsheet, description: 'Profit & Loss statements and analysis' },
    { key: 'notes', label: 'Additional Notes', icon: MessageSquare, description: 'Supporting documents and notes' }
  ];

  const handleFileUpload = (fileType: string, file: File) => {
    setFormData(prev => ({
      ...prev,
      files: {
        ...prev.files,
        [fileType]: file
      }
    }));
  };

  const handleGenerate = () => {
    // Simulate report generation
    const newReportId = Math.floor(Math.random() * 1000) + 100;
    
    // Close modal
    onClose();
    
    // Navigate to the new report
    navigate(`/reports/${newReportId}`);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.project && formData.month && formData.reportType;
      case 2:
        return Object.values(formData.files).some(file => file !== null);
      case 3:
        return true;
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-nomade-dark-brown/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-nomade-tan/20 w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-nomade-tan/20">
          <div className="flex items-center space-x-3">
            <div className="bg-nomade-tan/20 rounded-xl p-3 border border-nomade-tan/30">
              <FileText className="text-nomade-tan" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-nomade-off-white">Generate Report</h2>
              <p className="text-nomade-tan/80">Create a comprehensive property report</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-nomade-tan/60 hover:text-nomade-tan transition-colors p-2"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 border-b border-nomade-tan/20">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                  currentStep >= step 
                    ? 'bg-nomade-tan text-nomade-dark-brown border-nomade-tan' 
                    : 'bg-transparent text-nomade-tan/60 border-nomade-tan/30'
                }`}>
                  {step}
                </div>
                <div className="ml-3 text-sm">
                  <div className={`font-medium ${currentStep >= step ? 'text-nomade-off-white' : 'text-nomade-tan/60'}`}>
                    {step === 1 && 'Project Details'}
                    {step === 2 && 'Upload Files'}
                    {step === 3 && 'Review & Generate'}
                  </div>
                </div>
                {step < 3 && (
                  <ChevronRight className={`mx-4 ${currentStep > step ? 'text-nomade-tan' : 'text-nomade-tan/30'}`} size={16} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Step 1: Project Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-nomade-off-white mb-3">
                  Select Project
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {projects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => setFormData(prev => ({ ...prev, project: project.name }))}
                      className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                        formData.project === project.name
                          ? 'bg-nomade-tan/20 border-nomade-tan text-nomade-off-white'
                          : 'bg-nomade-tan/5 border-nomade-tan/20 text-nomade-tan/80 hover:bg-nomade-tan/10'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Building2 size={20} className="text-nomade-tan" />
                        <div>
                          <div className="font-semibold">{project.name}</div>
                          <div className="text-xs opacity-70">{project.location}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-nomade-off-white mb-3">
                    Report Month
                  </label>
                  <select
                    value={formData.month}
                    onChange={(e) => setFormData(prev => ({ ...prev, month: e.target.value }))}
                    className="w-full px-4 py-3 bg-nomade-tan/10 border border-nomade-tan/30 rounded-xl text-nomade-off-white focus:ring-2 focus:ring-nomade-tan/50 focus:border-nomade-tan"
                  >
                    <option value="">Select Month</option>
                    <option value="January 2024">January 2024</option>
                    <option value="February 2024">February 2024</option>
                    <option value="March 2024">March 2024</option>
                    <option value="April 2024">April 2024</option>
                    <option value="May 2024">May 2024</option>
                    <option value="June 2024">June 2024</option>
                    <option value="July 2024">July 2024</option>
                    <option value="August 2024">August 2024</option>
                    <option value="September 2024">September 2024</option>
                    <option value="October 2024">October 2024</option>
                    <option value="November 2024">November 2024</option>
                    <option value="December 2024">December 2024</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-nomade-off-white mb-3">
                    Report Type
                  </label>
                  <select
                    value={formData.reportType}
                    onChange={(e) => setFormData(prev => ({ ...prev, reportType: e.target.value }))}
                    className="w-full px-4 py-3 bg-nomade-tan/10 border border-nomade-tan/30 rounded-xl text-nomade-off-white focus:ring-2 focus:ring-nomade-tan/50 focus:border-nomade-tan"
                  >
                    {reportTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: File Upload */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-nomade-off-white mb-4">Upload Supporting Documents</h3>
                <p className="text-nomade-tan/80 mb-6">Upload Excel files and supporting documents for comprehensive analysis</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fileTypes.map((fileType) => {
                  const Icon = fileType.icon;
                  const hasFile = formData.files[fileType.key as keyof typeof formData.files];
                  
                  return (
                    <div key={fileType.key} className="bg-nomade-tan/5 border border-nomade-tan/20 rounded-xl p-4">
                      <div className="flex items-start space-x-3 mb-3">
                        <div className="bg-nomade-tan/20 rounded-lg p-2">
                          <Icon className="text-nomade-tan" size={20} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-nomade-off-white">{fileType.label}</h4>
                          <p className="text-xs text-nomade-tan/70">{fileType.description}</p>
                        </div>
                      </div>
                      
                      <label className={`block w-full p-3 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                        hasFile 
                          ? 'border-nomade-tan bg-nomade-tan/10' 
                          : 'border-nomade-tan/30 hover:border-nomade-tan/50 hover:bg-nomade-tan/5'
                      }`}>
                        <input
                          type="file"
                          accept=".xlsx,.xls,.csv,.pdf"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload(fileType.key, file);
                          }}
                        />
                        <div className="text-center">
                          {hasFile ? (
                            <div className="text-nomade-tan">
                              <FileText className="mx-auto mb-1" size={20} />
                              <div className="text-xs font-medium">{hasFile.name}</div>
                            </div>
                          ) : (
                            <div className="text-nomade-tan/60">
                              <Upload className="mx-auto mb-1" size={20} />
                              <div className="text-xs">Click to upload</div>
                            </div>
                          )}
                        </div>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-nomade-off-white mb-4">Review & Generate</h3>
                <p className="text-nomade-tan/80 mb-6">Review your selections and add any additional notes</p>
              </div>

              <div className="bg-nomade-tan/5 border border-nomade-tan/20 rounded-xl p-6">
                <h4 className="font-semibold text-nomade-off-white mb-4">Report Summary</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-nomade-tan/70">Project:</span>
                    <span className="ml-2 text-nomade-off-white font-medium">{formData.project}</span>
                  </div>
                  <div>
                    <span className="text-nomade-tan/70">Month:</span>
                    <span className="ml-2 text-nomade-off-white font-medium">{formData.month}</span>
                  </div>
                  <div>
                    <span className="text-nomade-tan/70">Type:</span>
                    <span className="ml-2 text-nomade-off-white font-medium">{formData.reportType}</span>
                  </div>
                  <div>
                    <span className="text-nomade-tan/70">Files:</span>
                    <span className="ml-2 text-nomade-off-white font-medium">
                      {Object.values(formData.files).filter(f => f !== null).length} uploaded
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-nomade-off-white mb-3">
                  Additional Notes (Optional)
                </label>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 bg-nomade-tan/10 border border-nomade-tan/30 rounded-xl text-nomade-off-white focus:ring-2 focus:ring-nomade-tan/50 focus:border-nomade-tan resize-none"
                  placeholder="Add any specific requirements or notes for this report..."
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-nomade-tan/20">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center space-x-2 px-4 py-2 text-nomade-tan/60 hover:text-nomade-tan transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
            <span>Previous</span>
          </button>

          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-3 text-nomade-tan/80 hover:text-nomade-tan transition-colors"
            >
              Cancel
            </button>
            
            {currentStep < 3 ? (
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="flex items-center space-x-2 bg-nomade-tan text-nomade-dark-brown px-6 py-3 rounded-xl hover:bg-nomade-orange-brown transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleGenerate}
                className="flex items-center space-x-2 bg-nomade-tan text-nomade-dark-brown px-6 py-3 rounded-xl hover:bg-nomade-orange-brown transition-all duration-300 font-semibold"
              >
                <FileText size={16} />
                <span>Generate Report</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateReportModal;