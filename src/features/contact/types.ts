export type Ticket = {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
  services?: string[];
};

export type SERVICE_METHODS = {
  create: (ticket: Ticket) => Promise<{
    success: boolean;
    message: string;
    errors?: ERRORS;
  }>;
};

export type ERRORS = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
  phone?: string;
  services?: string;
};

export type InputField = {
  name: string;
  label: string;
  type: string;
};

export type CheckboxField = {
  name: string;
  label: string;
  options: string[];
};

export type TextareaField = {
  name: string;
  label: string;
  rows?: number;
};

export type ContactFrontmatter = {
  enable: boolean;
  title: string;
  description: string;
  inputs: InputField[];
  checkboxes: CheckboxField[];
  textareas: TextareaField[];
  submit: {
    label: string;
  };
  successMessage: string;
  errorMessage: string;
};

export type ContactData = {
  frontmatter: ContactFrontmatter;
  content: string;
};
