---
title: Home
slug: /
sections:
  - type: HeroSection
    elementId: hero-section
    slides:
      - image: /images/Hero1.png
        tag: PREMIUM
        title: Designing a Home, Creating a Living
        subtitle: Your home deserves the best design.
        actions:
          - label: Contact Now
            url: /
          - label: Learn More
            url: /

      - image: /images/Hero2.png
        tag: CRAFTED
        title: Elegant Interiors Crafted with Care
        subtitle: Beautiful interiors crafted with precision and care.
        actions:
          - label: Contact Now
            url: /
          - label: Learn More
            url: /

      - image: /images/Hero3.png
        tag: BESPOKE
        title: Spaces That Reflect Your Lifestyle
        subtitle: Smart, modern, and functional home designs.
        actions:
          - label: Contact Now
            url: /
          - label: Learn More
            url: /

      - image: /images/Hero4.png
        tag: ENGINEERED
        title: Where Comfort Meets Style
        subtitle: Thoughtfully designed interiors for modern living.
        actions:
          - label: Contact Now
            url: /
          - label: Learn More
            url: /

      - image: /images/Hero5.png
        tag: HERITAGE
        title: Turn Your Dream Home into Reality
        subtitle: Premium designs tailored just for you.
        actions:
          - label: Contact Now
            url: /
          - label: Learn More
            url: /

    colors: bg-none-fg-light

    styles:
      self:
        isHero: true
        backgroundSize: cover
        backgroundPosition: center
        backgroundRepeat: no-repeat
        flexDirection: column
        alignItems: flex-start
        justifyContent: left
        textAlign: left
        height: full
        minHeight: screen
        padding:
          - pt-0
          - pl-0
          - pb-0
          - pr-0

        borderRadius:
          - none

    media: null

  - type: GenericSection
    elementId: about-us
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-12
          - pb-0
          - pl-6
          - pr-6
        maxHeight: 220px
        alignItems: center
        justifyContent: space-between
        flexDirection: row

    title:
      type: TitleBlock
      text: A Trendy Doors For Trendy Home
      color: text-dark

    subtitle: ''

    text: >
      We are committed to providing our customers with exceptional quality doors
      that combine modern design, durability, and precision craftsmanship. With
      decades of manufacturing experience, we focus on delivering doors that
      enhance both residential and commercial spaces.<br>

      Our commitment to quality materials, advanced production methods, and
      customer satisfaction has made us a trusted name in the door manufacturing
      industry.

    actions:
      - type: Button
        label: Know More
        url: /about
        style: secondary

    media:
      type: ImageBlock
      url: /images/About.png
      altText: Premium Door Collection
      styles:
      self:
        position: relative

    badge:
      label: About Us
      color: text-primary
      styles:
        self:
          textAlign: left

  - type: CategoryGridSection
    heading:
      eyebrow: Architectural Excellence
      title: Find the Perfect Fit for Your Home
      subtitle:

    styles:
      self:
        padding:
          - pt-16
          - pb-16

    items:
      # ROW 1
      - title: Teak Wood Door
        subtitle: Premium quality teak doors crafted for Indian homes
        span: 2
        split: true
        backgroundColor: '#e6f4fb'
        image:
          type: ImageBlock
          url: /images/Ca2.png
          altText: Teak Wood Door
        actions:
          - type: Action
            label: Shop Now
            style: primary
            url: /sofa

      - title: Mahagony Wood Doors
        subtitle: Main Entrance Doors
        span: 1
        image:
          type: ImageBlock
          url: /images/Ca3.png
          altText: Sneakers
        actions:
          - type: Action
            label: Shop Now
            style: primary
            url: /sneakers

      - title: Bedroom Doors
        subtitle: Membrane Doors
        span: 1
        image:
          type: ImageBlock
          url: /images/Ca5.png
          altText: Door
        actions:
          - type: Action
            label: Shop Now
            style: primary
            url: /toys

      # ROW 2
      - title: UPVC Door
        subtitle: Balcony Modern Doors
        span: 1
        image:
          type: ImageBlock
          url: /images/Ca6.png
          altText: Toy Train
        actions:
          - type: Action
            label: Shop Now
            style: primary
            url: /toys

      - title: WPC Doors
        subtitle: Waterproof Bathroom Doors
        span: 1
        image:
          type: ImageBlock
          url: /images/Ca8.png
          altText: Toy Train
        actions:
          - type: Action
            label: Shop Now
            style: primary
            url: /toys

      - title: Pooja Room Doors
        subtitle: Teak door with brass patterns and small bells (mani)
        span: 2
        split: true
        image:
          type: ImageBlock
          url: /images/Ca4.png
          altText: Toy Train
        actions:
          - type: Action
            label: Shop Now
            style: primary
            url: /toys

  - type: TimberSawMillSection
    eyebrow: Timber & Saw Mill

    title: >
      Your Vision Our Expertise
      Your Success Get Noticed Generate Leads Dominate

    description: >
      Timber sourced responsibly and processed in our own saw mill using
      modern machinery. From raw logs to premium doors, every step follows
      strict quality standards to ensure durability and elegance.

    stats:
      - value: '10k+'
        label: Completed Projects
      - value: '15k+'
        label: Happy Clients
      - value: '10k+'
        label: Custom Doors
      - value: '45+'
        label: Skilled Workers

    images:
      main:
        src: /images/timber2.webp
        alt: Timber processing
      top:
        src: /images/timber1.webp
        alt: Saw mill cutting
      bottom:
        src: /images/timber3.jpg
        alt: Door manufacturing

  - type: GenericSection
    badge:
      label: How We Craft Wood Products
    title:
      text: Timber & Saw Mill Process
      color: text-dark
      styles:
        self:
          textAlign: left
      type: TitleBlock
    subtitle: ' '
    text: |-
      From raw timber logs to finished wood products, we handle cutting, sizing, seasoning, polishing, and final finishing in-house. Our modern machines and skilled team ensure strong, accurate, and long-lasting woodwork for every requirement.
    actions:
      - type: Button
        label: See How We Work
        url: /products
        style: primary
      - type: Button
        label: Contact Us
        url: /contact
        style: secondary

    media:
      title: Title of the video
      url: /images/placeholder-video.mp4
      autoplay: true
      loop: true
      muted: true
      controls: false
      aspectRatio: '16:9'
      styles:
        self:
          padding:
            - pt-2
            - pb-2
            - pl-2
            - pr-2
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: VideoBlock

  - type: WhyChooseUsSection
    eyebrow: WHY CHOOSE US
    title: 26 Years of Experience
    subtitle: >
      Our templates allow for maximum customization.
    items:
      - title: Own Timber Yard & Saw Mill
        description: Tailor your landing page’s look and feel.
        icon: speaker
      - title: Premium Wood Quality
        description: >
          We build our templates for speed in mind, for super-fast load times so your
          customers never waver.
        icon: zap
      - title: Custom Size & Design
        description: >
          Everything you need to succeed and launch your landing page, right out of the box.
          No need to install anything else.
        icon: layers

  - subtitle: Award winning enterprises trust us
    images:
      - url: /images/empathy-logo.svg
        altText: Empathy logo
        type: ImageBlock
      - url: /images/wellster-logo.svg
        altText: Wellster logo
        type: ImageBlock
      - url: /images/vise-logo.svg
        altText: Vise logo
        type: ImageBlock
      - url: /images/telus-logo.svg
        altText: Telus logo
        type: ImageBlock
      - url: /images/contenful-logo.svg
        altText: Contentful logo
        type: ImageBlock
      - url: /images/sanity-logo.svg
        altText: Sanity logo
        type: ImageBlock
      - url: /images/rangle-logo.svg
        altText: Rangle logo
        type: ImageBlock
    motion: move-to-left
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
    type: ImageGallerySection

  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-2
          - pl-2
          - pb-2
          - pr-2
    type: DividerSection

  - type: ManufacturingSection
    elementId: timber-timeline
    colors: bg-dark-fg-light
    eyebrow:
      text: Manufacturing PROCESS

    heading:
      text: From Forest to Factory
      type: TitleBlock
      color: text-light
    subheading:
      text: We own the timber. We control the process.
        From ethical sourcing to precision manufacturing.
    timeline:
      layout: horizontal
      showConnector: true
      connectorStyle: solid
      animateOnScroll: true
      steps:
        - id: forest
          stepNumber: '01'
          title: Ethically Sourced Timber
          subtitle: >
            Timber harvested responsibly from managed forests
            under strict sustainability guidelines.
          icon: tree/*disabled for now
          image: /images/M1.png
          highlight: true

        - id: sawmill
          stepNumber: '02'
          title: In-House Saw Mill
          subtitle: >
            Logs are processed in our own saw mill, ensuring
            quality control from the very first cut.
          icon: tree/*disabled for now
          image: /images/M2.png
          highlight: true

        - id: seasoning
          stepNumber: '03'
          title: Controlled Seasoning
          subtitle: >
            Natural and kiln seasoning ensures strength,
            durability, and moisture balance.
          icon: tree/*disabled for now
          image: /images/M3.png
          highlight: true

        - id: processing
          stepNumber: '04'
          title: Precision Processing
          subtitle: >
            Advanced machinery delivers consistent dimensions
            and flawless finishing.
          icon: tree/*disabled for now
          image: /images/M4.png
          highlight: true

        - id: factory
          stepNumber: '05'
          title: Factory-Direct Products
          subtitle: >
            Final products move directly from our factory
            to your project — no middlemen.
          icon: tree/*disabled for now
          image: /images/M5.png
          highlight: true

    proofBar:
      enabled: true
      items:
        - label: Zero Middlemen
          value: 100%
        - label: In-House Production
          value: End-to-End
        - label: Outsourcing
          value: None

    cta:
      enabled: false

  - type: DoorInstallationProcess
    elementId: timber-timeline
    colors: bg-light-fg-dark
    eyebrow:
      text: Installation Journey

    heading:
      text: Our Door Installation Process
      type: TitleBlock
      color: text-dark
    subheading:
      text: From factory finishing to flawless installation at your home
    timeline:
      layout: horizontal
      showConnector: true
      connectorStyle: solid
      animateOnScroll: true
      steps:
        - id: Step1
          title: Finishing & Quality Check
          subtitle: Doors are polished and inspected for strength.
          image: /images/p1.png
          highlight: true

        - id: Step2
          stepNumber: '02'
          title: Safe Delivery & Site Preparation
          subtitle: >
            Secure transport and site readiness verification.
          icon: tree/*disabled for now
          image: /images/p2.png
          highlight: true

        - id: Step3
          stepNumber: '03'
          title: Expert Door Installation
          subtitle: >
            Precise alignment and professional fitting.
          icon: tree/*disabled for now
          image: /images/p3.png
          highlight: true

  - type: TestimonialCarousel
    motion: move-to-left
    testimonials:
      - name: Nill Smith
        role: Financial Director
        quote: Sample quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
        avatar: /images/person1.jpg

      - name: Merry Kinlly
        role: Chief Accountant
        quote: Sample quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
        avatar: /images/person2.jpg

      - name: Merry Kinlly
        role: Chief Accountant
        quote: Sample quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
        avatar: /images/person2.jpg

      - name: Merry Kinlly
        role: Chief Accountant
        quote: Sample quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
        avatar: /images/person2.jpg

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
      flexDirection: col
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
  metaTitle: Home - Demo site
  metaDescription: This demo site is built with Netlify Create.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
