import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import DoorInstallationProcess from './sections/DoorInstallationProcess';
import ScrollToTop from './ScrollToTop';




/**
 * The getComponent() function loads a component using dynamic import.
 *
 * Dynamic imports are useful when you wish to load a module conditionally. For example, if a home page renders the
 * "HeroSection" conditionally, then loading it with getComponent('HeroSection') will ensure that the "HeroSection"
 * is bundled only when used.
 */

export function getComponent(input: any): ComponentType | null {
    // If a string is passed (PageLayout, PostLayout, etc.)
    if (typeof input === "string") {
        return components[input] || null;
    }

    // If a section object is passed
    const key =
        input?.__metadata?.modelName ||
        input?.type;

    return components[key] || null;
}


/**
 * Map of dynamically imported components.
 *
 * The mapping key of a dynamically imported component is the model name describing the props of that component.
 * And the value is the component imported via Next.js dynamic import. You should use dynamic components for large
 * components or components with heavy external dependencies that are used sparingly in your website's pages.
 * To learn more about Nextjs dynamic imports visit:
 * https://nextjs.org/docs/advanced-features/dynamic-import
 *
 * Dynamic components can be selected at run-time based on the type of their content (props). This is because
 * components are mapped by models that describe their content, and content's type always matches the model name.
 * For example, a page component can call `getComponent(section.__metadata.modelName)` function, passing it the type of section
 * data it needs to render, and get back the component that can render that type of data:
 *
 *     const Section = getComponent(section.__metadata.modelName);
 *     return <Section {...section} />;
 */
const components = {
    AutoCompletePosts: dynamic(() => import('./blocks/SearchBlock/AutoCompletePosts')),
    CategoryGridSection: dynamic(() => import('./sections/CategoryGridSection')),    
    CarouselSection: dynamic(() => import('./sections/CarouselSection')),
    CheckboxFormControl: dynamic(() => import('./blocks/FormBlock/CheckboxFormControl')),
    DividerSection: dynamic(() => import('./sections/DividerSection')),
    HeroSection: dynamic(() => import('./sections/HeroSection')),
    HeroSubpages: dynamic(() => import('./sections/HeroSubpages')),
    ProductTeak: dynamic(() => import('./sections/ProductTeak')),
    EmailFormControl: dynamic(() => import('./blocks/FormBlock/EmailFormControl')),
    FeaturedItem: dynamic(() => import('./sections/FeaturedItemsSection/FeaturedItem')),
    FeaturedItemToggle: dynamic(() => import('./sections/FeaturedItemsSection/FeaturedItemToggle')),
    FeaturedItemsSection: dynamic(() => import('./sections/FeaturedItemsSection')),
    FeaturedFrameSection: dynamic(() => import('./sections/FeaturedFrameSection')),
    FeaturedPeopleSection: dynamic(() => import('./sections/FeaturedPeopleSection')),
    FeaturedPostsSection: dynamic(() => import('./sections/FeaturedPostsSection')),
    PremiumAsymmetricAbout: dynamic(() => import('./sections/PremiumAsymmetricAbout')),
    ExclusivePromoStrip: dynamic(() => import('./sections/ExclusivePromoStrip')),
    FaqAccordionSection: dynamic(() => import('./sections/FaqAccordionSection')),
    ComprehensiveServicesGrid: dynamic(() => import('./sections/ComprehensiveServicesGrid')),
    ScrollToTop: dynamic(() => import('./ScrollToTop')),
    FormBlock: dynamic(() => import('./blocks/FormBlock')),
    GenericSection: dynamic(() => import('./sections/GenericSection')),
    ImageBlock: dynamic(() => import('./blocks/ImageBlock')),
    ImageGallerySection: dynamic(() => import('./sections/ImageGallerySection')),
    ManufacturingSection: dynamic(() => import('./sections/ManufacturingSection')),
    DoorInstallationProcess: dynamic(() => import('./sections/DoorInstallationProcess')),
    TimberSawMillSection:dynamic(() => import('./sections/TimberSawMillSection')),
    WhyChooseUsSection: dynamic(() => import('./sections/WhyChooseUsSection')),
    PostFeedSection: dynamic(() => import('./sections/PostFeedSection')),
    PricingSection: dynamic(() => import('./sections/PricingSection')),
    RecentPostsSection: dynamic(() => import('./sections/RecentPostsSection')),
    SelectFormControl: dynamic(() => import('./blocks/FormBlock/SelectFormControl')),
    PhoneFormControl: dynamic(() => import('./blocks/FormBlock/PhoneFormControl')),
    FormHeadingControl: dynamic(() => import('./blocks/FormBlock/FormHeadingControl')),
    CategoryFormControl: dynamic(() => import('./blocks/FormBlock/CategoryFormControl')),
    TextareaFormControl: dynamic(() => import('./blocks/FormBlock/TextareaFormControl')),
    TextFormControl: dynamic(() => import('./blocks/FormBlock/TextFormControl')),
    TestimonialCarousel: dynamic(() => import('./TestimonialCarousel')),
    VideoBlock: dynamic(() => import('./blocks/VideoBlock')),
    PageLayout: dynamic(() => import('./layouts/PageLayout')),
    PostLayout: dynamic(() => import('./layouts/PostLayout')),
    PostFeedLayout: dynamic(() => import('./layouts/PostFeedLayout')),
    PostFeedCategoryLayout: dynamic(() => import('./layouts/PostFeedCategoryLayout'))
};
