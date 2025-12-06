import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import Section from '../Section';
import TitleBlock from '../../blocks/TitleBlock';
import { Action, Badge } from '../../atoms';

export default function GenericSection(props) {
    const {
        elementId,
        colors,
        badge,
        title,
        subtitle,
        text,
        actions = [],
        media,
        styles = {},
        enableAnnotations
    } = props;

    const flexDirection = styles?.self?.flexDirection ?? 'row';
    const hasTextContent = !!(badge?.label || title?.text || subtitle || text || actions.length > 0);
    const hasMedia = !!media;

    const bgUrl = styles?.self?.backgroundImage?.url ?? null;
    const bgSize = styles?.self?.backgroundSize ?? 'cover';
    const bgPos = styles?.self?.backgroundPosition ?? 'center';
    const bgRepeat = styles?.self?.backgroundRepeat ?? 'no-repeat';

    const isHero = Boolean(bgUrl); // Hero detection

    return (
        <Section
            elementId={elementId}
            className={classNames(
                "sb-component-generic-section relative overflow-hidden",
                isHero && "p-0 m-0 max-w-none"
            )}
            colors={colors}
            styles={styles?.self}
            {...getDataAttrs(props)}
        >

            {/* ------------------------- */}
            {/* FULLSCREEN HERO BACKGROUND */}
            {/* ------------------------- */}
            {isHero && (
                <div
                    className="absolute inset-0 w-full h-full z-0"
                    style={{
                        backgroundImage: `url(${bgUrl})`,
                        backgroundSize: bgSize,
                        backgroundPosition: bgPos,
                        backgroundRepeat: bgRepeat
                    }}
                />
            )}

            {/* DARK OVERLAY */}
            {isHero && (
                <div className="absolute inset-0 z-[1] bg-black/40" />
            )}

            {/* ------------------------- */}
            {/* CONTENT LAYER */}
            {/* ------------------------- */}
            <div
                className={classNames(
                    "relative z-10",
                    "flex items-center justify-center min-h-[90vh] px-10"
                )}
            >
                <div
                    className={classNames(
                        isHero
                            ? "w-full text-white px-10"
                            : "w-full flex items-stretch self-stretch gap-x-12 gap-y-16",
                        !isHero &&
                            mapFlexDirectionStyles(flexDirection),
                        !isHero &&
                            mapStyles({ alignItems: styles?.self?.justifyContent ?? 'flex-start' })
                    )}
                >

                    {/* TEXT CONTENT */}
                    {hasTextContent && (
                        <div
                            className={classNames(
                                isHero
                                    ? "w-full"
                                    : "w-full max-w-sectionBody",
                                hasMedia && !isHero && "lg:max-w-[27.5rem]"
                            )}
                        >
                            {badge && <Badge {...badge} />}

                            {title && (
                                <TitleBlock
                                    {...title}
                                    className={classNames(
                                        { 'mt-4': badge?.label },
                                        isHero ? "text-white" : ""
                                    )}
                                />
                            )}

                            {subtitle && (
                                <p
                                    className={classNames(
                                        "mt-4",
                                        isHero ? "text-white" : "text-gray-800"
                                    )}
                                >
                                    {subtitle}
                                </p>
                            )}

                            {text && (
                                <Markdown
                                    className={classNames(
                                        "mt-6",
                                        isHero ? "text-white" : "text-gray-700"
                                    )}
                                >
                                    {text}
                                </Markdown>
                            )}

                            {actions.length > 0 && (
                                <div className="flex gap-4 mt-8">
                                    {actions.map((action, index) => (
                                        <Action key={index} {...action} />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* MEDIA (ONLY IF NOT HERO) */}
                    {!isHero && hasMedia && (
                        <div className="w-full lg:w-[57.5%] lg:shrink-0">
                            <Media media={media} hasAnnotations={enableAnnotations} />
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
}

// Media Component
function Media({ media,hasAnnotations }) {
    const modelName = media.__metadata.modelName;
    const MediaComponent = getComponent(modelName);
    return <MediaComponent {...media} />;
}

// Layout Mappings
function mapFlexDirectionStyles(flexDirection) {
    switch (flexDirection) {
        case 'row':
            return 'flex-col lg:flex-row lg:justify-between';
        case 'row-reverse':
            return 'flex-col lg:flex-row-reverse lg:justify-between';
        case 'col':
            return 'flex-col';
        default:
            return 'flex-col';
    }
}
