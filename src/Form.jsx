import React, { useState } from 'react';
import { ArrowLeft, Plus, Minus } from 'lucide-react';

const Navbar = () => (
  <nav className="bg-white border-b border-gray-200">
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex space-x-8 h-14">
        <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center">Home</a>
        <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center">About</a>
        <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center">Servey</a>
        <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center">Servey Details</a>
        <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center">Hooks</a>
      </div>
    </div>
  </nav>
);

const Form = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    options: []
  });

  const answerTypes = [
    'Text',
    'TextArea',
    'Number',
    'Select',
    'Radio',
    'Checkbox',
    'Slider'
  ];

  const handleTypeChange = (type) => {
    let defaultOptions = [];
    
    switch(type) {
      case 'Number':
      case 'Slider':
        defaultOptions = [{ placeholder: '', min: '', max: '', step: '' }];
        break;
      case 'TextArea':
        defaultOptions = [{ placeholder: '', min: '', max: '', rows: '' }];
        break;
      case 'Select':
      case 'Radio':
      case 'Checkbox':
        defaultOptions = [{ placeholder: '' }];
        break;
      default:
        defaultOptions = [];
    }

    setFormData({
      ...formData,
      type,
      options: defaultOptions
    });
  };

  const addOption = () => {
    const newOption = formData.type === 'TextArea' 
      ? { placeholder: '', min: '', max: '', rows: '' }
      : formData.type === 'Number' || formData.type === 'Slider'
      ? { placeholder: '', min: '', max: '', step: '' }
      : { placeholder: '' };

    setFormData({
      ...formData,
      options: [...formData.options, newOption]
    });
  };

  const removeOption = (index) => {
    const newOptions = formData.options.filter((_, i) => i !== index);
    setFormData({ ...formData, options: newOptions });
  };

  const handleOptionChange = (index, field, value) => {
    const newOptions = [...formData.options];
    newOptions[index] = { ...newOptions[index], [field]: value };
    setFormData({ ...formData, options: newOptions });
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ title: '', description: '', type: '', options: [] });
    }, 2000);
  };

  const renderOptions = () => {
    if (!formData.type) return null;

    return formData.options.map((option, index) => (
      <div key={index} className="bg-gray-50 p-4 rounded-md mb-2">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Placeholder"
            className="flex-1 p-2 border rounded-md"
            value={option.placeholder}
            onChange={(e) => handleOptionChange(index, 'placeholder', e.target.value)}
          />
          
          {(formData.type === 'Number' || formData.type === 'Slider' || formData.type === 'TextArea') && (
            <>
              <input
                type="text"
                placeholder="Min"
                className="w-24 p-2 border rounded-md"
                value={option.min}
                onChange={(e) => handleOptionChange(index, 'min', e.target.value)}
              />
              <input
                type="text"
                placeholder="Max"
                className="w-24 p-2 border rounded-md"
                value={option.max}
                onChange={(e) => handleOptionChange(index, 'max', e.target.value)}
              />
              <input
                type="text"
                placeholder={formData.type === 'TextArea' ? 'Rows' : 'Step'}
                className="w-24 p-2 border rounded-md"
                value={formData.type === 'TextArea' ? option.rows : option.step}
                onChange={(e) => handleOptionChange(index, formData.type === 'TextArea' ? 'rows' : 'step', e.target.value)}
              />
            </>
          )}
          
          <button
            onClick={() => removeOption(index)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-full"
          >
            <Minus className="h-5 w-5" />
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded-md flex items-center gap-2">
          ✓ Add Successfully!
        </div>
      )}

      <div className="max-w-3xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <ArrowLeft className="h-5 w-5" />
            <h1 className="text-xl font-medium">Add Question</h1>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Servey Title"
              className="w-full p-2 bg-gray-50 border-0 rounded-md"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />

            <input
              type="text"
              placeholder="Question Description"
              className="w-full p-2 bg-gray-50 border-0 rounded-md"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />

            <select
              className="w-full p-2 bg-gray-50 border-0 rounded-md"
              value={formData.type}
              onChange={(e) => handleTypeChange(e.target.value)}
            >
              <option value="">Answer Type</option>
              {answerTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            {renderOptions()}

            {formData.type && (
              <button
                onClick={addOption}
                className="flex items-center justify-center w-8 h-8 ml-auto rounded-full bg-green-50 text-green-600 hover:bg-green-100"
              >
                <Plus className="h-5 w-5" />
              </button>
            )}

            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;