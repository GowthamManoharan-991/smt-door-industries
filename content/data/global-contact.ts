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
    <a href="tel:+918754470389" class="hover:underline text-blue-600 dark:text-blue-400">
    +91 87544 70389<br/><br/>
  </div>
</div>

<div class="flex items-start gap-4">
  <span class="text-xl">✉️</span>
  <div>
    <strong>Email</strong><br/>
    info@smtdoorindustries.com<br/><br/>
  </div>
</div>

<div class="flex items-start gap-4">
  <span class="text-xl">🕒</span>
  <div>
    <strong>Business Hours</strong><br/>
    Monday - Saturday<br/>
    9:00 AM to 6:00 PM
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
      display: 'flex',        // Force Flexbox
      flexWrap: 'wrap',       // Allow items to sit side-by-side
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
      width: 'full', // Use Tailwind fraction or 'calc(50% - 8px)'
      
      options: [
        { label: 'Teak Wood Door', value: 'Teak Wood Door' },
        { label: 'Mahogany Door', value: 'Mahogany Door' },
        { label: 'Membrane Door', value: 'Membrane Door' },
        { label: 'Glass Door', value: 'Glass Door' },
        { label: 'UPVC Door', value: 'UPVC Door' },
        { label: 'WPC Door', value: 'WPC Door' },
        { label: 'Designer Main Door', value: 'Designer Main Door' }
      ]
    },
    {
      __metadata: { modelName: 'CategoryFormControl' },
      name: 'category',
      label: 'Window Category',
      placeholder: 'Select Window Category',
      hideLabel: true,
      isRequired: true,
      width: '1/2', // Use Tailwind fraction or 'calc(50% - 8px)'
      className: 'w-full md:w-[calc(50%-8px)]', // Force desktop width
      options: [
        { label: 'Wooden Windows', value: 'Wooden Windows' },
        { label: 'UPVC Windows', value: 'UPVC Windows' },
        { label: 'Steel Windows', value: 'Steel Windows' },
        { label: 'WPC Windows', value: 'WPC Windows' },
        
      ]
    },
    {
      __metadata: { modelName: 'CategoryFormControl' },
      name: 'category',
      label: 'Hardware Category',
      placeholder: 'Select Hardware Category',
      hideLabel: true,
      isRequired: true,
      width: '1/2', // Use Tailwind fraction or 'calc(50% - 8px)'
      className: 'w-full md:w-[calc(50%-8px)]', // Force desktop width
      options: [
        { label: 'Locks', value: 'Locks' },
        { label: 'Handles', value: 'Handles' },
        { label: 'Hinges', value: 'Hinges' },
        { label: 'Tower Bolt', value: 'Tower Bolt' },
        { label: 'Aldrop', value: 'Aldrop' },
        { label: 'Ornaments', value: 'Ornaments' },
        { label: 'Door Stopper', value: 'Door Stopper' },
        { label: 'Safety Latches', value: 'Safety Latches' },
        { label: 'Others', value: 'Others' }
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