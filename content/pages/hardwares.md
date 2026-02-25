---
title: Hardwares
slug: /hardwares

sections:
  - type: HeroSubpages
    elementId: doors-hero
    title: Premium Doors Collection
    subtitle: >
      Explore our finest teak wood doors crafted for luxury interiors.
    image:
      type: ImageBlock
      url: /images/Hero1.png
      altText: Premium Wooden Doors
    colors: bg-dark-fg-light
    styles:
      self:
        minHeight: 50vh
        padding:
          - pt-24
          - pb-24
          - pl-8
          - pr-8
        textAlign: center

  - type: ProductTeak
    elementId: teak-showcase
    background: white
    height: half

    products:
      - model: TK-101
        image: /images/Ca3.png

      - model: TK-102
        image: /images/Ca3.png

      - model: TK-103
        image: /images/Ca3.png

      - model: TK-104
        image: /images/Ca3.png

      - model: TK-101
        image: /images/Ca3.png

      - model: TK-102
        image: /images/Ca3.png

      - model: TK-103
        image: /images/Ca3.png

      - model: TK-104
        image: /images/Ca3.png

  - type: GenericSection
    elementId: contact-us
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-10
          - pb-10
          - pl-6
          - pr-6
          - sm:pt-16
          - sm:pb-16
          - sm:pl-8
          - sm:pr-8
          - lg:pt-24
          - lg:pb-24
          - lg:pl-16
          - lg:pr-16
        flexDirection: row
        lg:flexDirection: row
        justifyContent: space-between
        alignItems: flex-start

    title:
      type: TitleBlock
      text: Contact Us
      color: text-dark
      styles:
        self:
          textAlign: left

    subtitle: >
      Reach out to us for premium door solutions. Our team is ready to help you
      with product details, pricing, and custom requirements.

    text: |-

      <div class="flex items-start gap-4">
      <span class="text-xl">🏠</span>
      <div>
      <strong>Address</strong><br/>
      487 Sugart Camp Road,<br/>
      Owatonna, Minnesota, 55060<br/><br/>
      </div>
      </div>

      <div class="flex items-start gap-4">
      <span class="text-xl">📞</span>
      <div>
      <strong>Phone</strong><br/>
      561-456-2321<br/><br/>
      </div>
      </div>

      <div class="flex items-start gap-4">
      <span class="text-xl">✉️</span>
      <div>
      <strong>Email</strong><br/>
      example@email.com
      </div>
      </div>

    media:
      type: FormBlock
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-5
            - pb-5
            - pl-10
            - pr-10
          backgroundColor: bg-dark
          borderRadius: small
          maxWidth: 420px
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1

      fields:
        - type: FormHeadingControl
          text: Send Us a Message
        - name: name
          label: Full Name
          placeholder: Enter your Name
          hideLabel: true
          isRequired: true
          width: full
          type: TextFormControl
          styles:
            input:
              textColor: text-light
              backgroundColor: bg-dark
              borderColor: border-light

        - name: email
          label: Email
          placeholder: Enter your Email
          hideLabel: true
          isRequired: true
          width: full
          type: EmailFormControl
          styles:
            input:
              textColor: text-light
              backgroundColor: bg-dark
              borderColor: border-light

        - name: phone
          label: Phone Number
          placeholder: Mobile Number
          hideLabel: true
          isRequired: true
          width: full
          type: PhoneFormControl
          styles:
            input:
              textColor: text-light
              backgroundColor: bg-dark
              borderColor: border-light

        - name: category
          label: Door Category
          placeholder: Select Door Category
          hideLabel: true
          isRequired: true
          width: full
          type: CategoryFormControl
          options:
            - label: Teak Wood Door
              value: Teak Wood Door
            - label: Mahogany Door
              value: Mahogany Door
            - label: Membrane Door
              value: Membrane Door
            - label: Glass Door
              value: Glass Door
            - label: UPVC Door
              value: UPVC Door
            - label: WPC Door
              value: WPC Door
            - label: Designer Main Door
              value: Designer Main Door
          styles:
            input:
              textColor: text-light
              backgroundColor: bg-dark
              borderColor: border-light

      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        style: primary
        showIcon: false

    badge:
      label: Let's Discuss on Something Cool Together
      color: text-dark
      type: Badge

seo:
  metaTitle: Hardwares | Premium Hardwares
  metaDescription: Premium teak wood doors with modern 3D design and luxury finish.
  socialImage: /images/doors-hero.jpg
  type: Seo

type: PageLayout
---
