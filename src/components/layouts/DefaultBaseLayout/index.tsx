import * as React from 'react';
import classNames from 'classnames';
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';
import { globalContactSection } from '../../../../content/data/global-contact';
import { getComponent } from 'src/components/components-registry';
import ScrollToTop from '@/components/ScrollToTop';



export default function DefaultBaseLayout(props) {
    const { page, site } = props;
    const { enableAnnotations = true } = site;
    const pageMeta = page?.__metadata || {};

    const SectionComponent = getComponent(globalContactSection.type) as React.ComponentType<any>;


    return (
        <div className={classNames('sb-page', pageMeta.pageCssClasses)} {...(enableAnnotations && { 'data-sb-object-id': pageMeta.id })}>
            <div className="sb-base sb-default-base-layout">
                {site.header && <Header {...site.header} enableAnnotations={enableAnnotations} />}
                {props.children}
                {/* ✅ Proper Global Contact Section */}
        {SectionComponent && (
          <SectionComponent {...globalContactSection} />
        )}
                {site.footer && <Footer {...site.footer} enableAnnotations={enableAnnotations}
                 />}
                 {/* ✅ SCROLL TO TOP BUTTON (FIXED POSITION) */}
        <ScrollToTop />
            </div>
        </div>
    );
}
