import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import BackgroundImage from '../../atoms/BackgroundImage';

export default function Section(props) {
    const {
        elementId,
        className,
        colors = 'bg-light-fg-dark',
        backgroundImage,
        styles = {},
        children
    } = props;

    // Hero detection (your YAML uses isHero + backgroundImage)
    const isHero =
        styles?.self?.isHero === true ||
        styles?.self?.minHeight === 'screen' ||
        styles?.self?.height === 'full' ||
        styles?.self?.backgroundImage?.url ||
        backgroundImage?.url;

    return (
        <div
            id={elementId}
            className={classNames(
                'sb-component sb-component-section relative',
                className,
                colors,

                // If HERO → remove padding and width limits
                isHero
                    ? 'w-screen max-w-none p-0 m-0 overflow-hidden'
                    : styles?.padding
                    ? mapStyles({ padding: styles.padding })
                    : 'px-4 py-28',

                styles?.margin ? mapStyles({ margin: styles.margin }) : undefined
            )}
            {...getDataAttrs(props)}
        >
            {/* HERO BACKGROUND */}
            {backgroundImage && (
                <BackgroundImage
                    {...backgroundImage}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
            )}

            <div
                className={
                    isHero
                        ? 'relative w-full h-full'
                        : 'relative w-full max-w-7xl mx-auto'
                }
            >
                {children}
            </div>
        </div>
    );
}
