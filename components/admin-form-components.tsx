import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Loader } from 'lucide-react';

/**
 * FormWrapper - Wraps entire admin form with header and layout
 * Usage: <FormWrapper title="New Service" backHref="/admin/services">
 */
export function FormWrapper({
  title,
  description,
  backHref,
  children,
}: {
  title: string;
  description?: string;
  backHref: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-white to-aether-electric-teal to-opacity-5 py-12">
      <div className="container-aether max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href={backHref}
            className="flex items-center gap-2 text-sm font-semibold text-aether-electric-teal hover:text-aether-deep-teal transition-colors mb-4"
          >
            <ChevronLeft size={16} />
            Back
          </Link>

          <h1 className="text-4xl font-bold text-aether-deep-teal mb-2">{title}</h1>
          {description && <p className="text-deep-ink text-opacity-70">{description}</p>}
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl border border-aether-electric-teal border-opacity-10 p-8 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * FormField - Wrapper for form inputs, textareas, selects
 * Usage: <FormField label="Service Name" error="Name required">
 *          <input ... />
 *        </FormField>
 */
export function FormField({
  label,
  description,
  error,
  required = false,
  children,
}: {
  label: string;
  description?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-deep-ink">
        {label}
        {required && <span className="text-aether-alert ml-1">*</span>}
      </label>

      {description && <p className="text-xs text-neutral">{description}</p>}

      <div className={error ? 'has-error' : ''}>
        {children}
      </div>

      {error && <p className="text-xs text-aether-alert font-medium flex items-center gap-1">⚠️ {error}</p>}
    </div>
  );
}

/**
 * FormInput - Styled input field
 * Usage: <FormInput type="text" placeholder="Enter name" value={name} onChange={...} />
 */
export function FormInput({
  label,
  description,
  error,
  required = false,
  ...props
}: {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  [key: string]: any;
}) {
  const input = (
    <input
      {...props}
      className={`w-full px-4 py-2.5 rounded-lg border-2 bg-sky-white text-deep-ink placeholder-neutral transition-all ${
        error
          ? 'border-aether-alert focus:border-aether-alert'
          : 'border-aether-electric-teal border-opacity-20 focus:border-aether-bright-cyan focus:border-opacity-100'
      }`}
    />
  );

  if (label) {
    return (
      <FormField label={label} description={description} error={error} required={required}>
        {input}
      </FormField>
    );
  }

  return input;
}

/**
 * FormTextarea - Styled textarea field
 * Usage: <FormTextarea label="Description" rows={4} value={...} onChange={...} />
 */
export function FormTextarea({
  label,
  description,
  error,
  required = false,
  ...props
}: {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  [key: string]: any;
}) {
  const textarea = (
    <textarea
      {...props}
      className={`w-full px-4 py-2.5 rounded-lg border-2 bg-sky-white text-deep-ink placeholder-neutral transition-all resize-none ${
        error
          ? 'border-aether-alert focus:border-aether-alert'
          : 'border-aether-electric-teal border-opacity-20 focus:border-aether-bright-cyan focus:border-opacity-100'
      }`}
    />
  );

  if (label) {
    return (
      <FormField label={label} description={description} error={error} required={required}>
        {textarea}
      </FormField>
    );
  }

  return textarea;
}

/**
 * FormSelect - Styled select dropdown
 * Usage: <FormSelect label="Status" value={status} onChange={...}>
 *          <option value="draft">Draft</option>
 *          <option value="published">Published</option>
 *        </FormSelect>
 */
export function FormSelect({
  label,
  description,
  error,
  required = false,
  children,
  ...props
}: {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  [key: string]: any;
}) {
  const select = (
    <select
      {...props}
      className={`w-full px-4 py-2.5 rounded-lg border-2 bg-sky-white text-deep-ink transition-all ${
        error
          ? 'border-aether-alert focus:border-aether-alert'
          : 'border-aether-electric-teal border-opacity-20 focus:border-aether-bright-cyan focus:border-opacity-100'
      }`}
    >
      {children}
    </select>
  );

  if (label) {
    return (
      <FormField label={label} description={description} error={error} required={required}>
        {select}
      </FormField>
    );
  }

  return select;
}

/**
 * FormButtons - Submit/Cancel buttons for forms
 * Usage: <FormButtons submitLabel="Save" isLoading={loading} onCancel={() => router.back()} />
 */
export function FormButtons({
  submitLabel = 'Save',
  cancelHref,
  isLoading = false,
  onCancel,
  isDestructive = false,
}: {
  submitLabel?: string;
  cancelHref?: string;
  isLoading?: boolean;
  onCancel?: () => void;
  isDestructive?: boolean;
}) {
  return (
    <div className="flex gap-4 pt-8 mt-8 border-t border-aether-electric-teal border-opacity-10">
      {cancelHref ? (
        <Link
          href={cancelHref}
          className="px-6 py-2.5 rounded-lg border-2 border-aether-electric-teal text-aether-electric-teal font-semibold hover:bg-aether-electric-teal hover:text-white transition-all"
        >
          Cancel
        </Link>
      ) : onCancel ? (
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2.5 rounded-lg border-2 border-aether-electric-teal text-aether-electric-teal font-semibold hover:bg-aether-electric-teal hover:text-white transition-all"
        >
          Cancel
        </button>
      ) : null}

      <button
        type="submit"
        disabled={isLoading}
        className={`px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed ml-auto ${
          isDestructive
            ? 'bg-aether-alert text-white hover:bg-red-700'
            : 'bg-gradient-to-r from-aether-electric-teal to-aether-bright-cyan text-white hover:shadow-lg hover:scale-105'
        }`}
      >
        {isLoading && <Loader size={16} className="animate-spin" />}
        {submitLabel}
      </button>
    </div>
  );
}

/**
 * FormGroup - Wrapper for grouping related fields
 * Usage: <FormGroup title="Basic Info">
 *          <FormInput ... />
 *          <FormInput ... />
 *        </FormGroup>
 */
export function FormGroup({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={title ? 'space-y-6 pb-8 border-b border-aether-electric-teal border-opacity-10' : 'space-y-6'}>
      {title && <h3 className="text-lg font-bold text-aether-deep-teal">{title}</h3>}
      <div className="space-y-4">{children}</div>
    </div>
  );
}

/**
 * FormCheckbox - Styled checkbox
 * Usage: <FormCheckbox label="Publish immediately" checked={...} onChange={...} />
 */
export function FormCheckbox({
  label,
  checked,
  onChange,
  ...props
}: {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...props}
        className="w-5 h-5 rounded border-2 border-aether-electric-teal checked:bg-aether-electric-teal checked:border-aether-electric-teal cursor-pointer"
      />
      <span className="font-medium text-deep-ink">{label}</span>
    </label>
  );
}
