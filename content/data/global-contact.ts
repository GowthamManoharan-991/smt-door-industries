export const globalContactSection = {
  type: 'GenericSection',
  badge: {
    type: 'Badge',
    label: "LET'S DISCUSS ON SOMETHING COOL TOGETHER"
  },
  title: {
    type: 'TitleBlock',
    text: 'Contact Us',
    color: 'text-dark',
    styles: {
      self: {
        textAlign: 'left'
      }
    }
  },
  subtitle:
    'Reach out to us for premium door solutions. Our team is ready to help you with product details, pricing, and custom requirements.',

text: `
<div class="flex items-start gap-4">
  <span class="text-xl">🏠</span>
  <div>
    <strong>Address</strong><br/>
    313/1, Thoppampalayam Road, Myleripalayam,<br/>
    Ottakkalmandapam, Coimbatore, Tamil Nadu - 641032<br/><br/>
  </div>
</div>

<div class="flex items-start gap-4">
  <span class="text-xl">📞</span>
  <div>
    <strong>Phone</strong><br/>
    +91 87544 70389<br/><br/>
  </div>
</div>

<div class="flex items-start gap-4">
  <span class="text-xl">✉️</span>
  <div>
    <strong>Email</strong><br/>
    example@email.com
  </div>
</div>
`,

media: {
  __metadata: {
    modelName: 'FormBlock'
  },
  elementId: 'contact-form',
  styles: {
    self: {
      padding: ['pt-5', 'pb-5', 'pl-10', 'pr-10'],
      backgroundColor: 'bg-dark',
      borderRadius: 'small',
      maxWidth: '420px',
      borderColor: 'border-dark',
      borderStyle: 'solid',
      borderWidth: 1
    }
  },
  fields: [
    {
      __metadata: { modelName: 'FormHeadingControl' },
      text: 'Send Us a Message'
    },
    {
      __metadata: { modelName: 'TextFormControl' },
      name: 'name',
      label: 'Full Name',
      placeholder: 'Enter your Name',
      hideLabel: true,
      isRequired: true,
      width: 'full'
    },
    {
      __metadata: { modelName: 'EmailFormControl' },
      name: 'email',
      label: 'Email',
      placeholder: 'Enter your Email',
      hideLabel: true,
      isRequired: true,
      width: 'full'
    },
    {
      __metadata: { modelName: 'PhoneFormControl' },
      name: 'phone',
      label: 'Phone Number',
      placeholder: 'Mobile Number',
      hideLabel: true,
      isRequired: true,
      width: 'full'
    },
    {
      __metadata: { modelName: 'CategoryFormControl' },
      name: 'category',
      label: 'Door Category',
      placeholder: 'Select Door Category',
      hideLabel: true,
      isRequired: true,
      width: 'full',
      options: [
        { label: 'Teak Wood Door', value: 'Teak Wood Door' },
        { label: 'Mahogany Door', value: 'Mahogany Door' },
        { label: 'Membrane Door', value: 'Membrane Door' },
        { label: 'Glass Door', value: 'Glass Door' },
        { label: 'UPVC Door', value: 'UPVC Door' },
        { label: 'WPC Door', value: 'WPC Door' },
        { label: 'Designer Main Door', value: 'Designer Main Door' }
      ]
    }
  ],
  submitButton: {
    __metadata: { modelName: 'SubmitButtonFormControl' },
    label: 'Submit',
    style: 'primary',
    showIcon: false
  }
}
};