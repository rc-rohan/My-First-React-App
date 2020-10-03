import React from "react";

const InputField = ({ label, fieldId, fieldType, placeholder,dataValidationMessage }) => (
    <div class="control-group">
        <div class="form-group floating-label-form-group controls mb-0 pb-2">
            <label>{label}</label>
            <input
                class="form-control"
                id={fieldId}
                type={fieldType}
                placeholder={placeholder}
                required="required"
                data-validation-required-message={dataValidationMessage}
            />
            <p class="help-block text-danger"></p>
        </div>
    </div>
);

export default InputField;