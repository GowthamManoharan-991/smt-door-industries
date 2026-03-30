import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../../utils/map-styles-to-class-names';

export default function FeaturedFrameSection(props) {
    const {
        elementId,
        title = 'Best-Selling Door',
        subtitle = "Beautify with people's favourite designs.",
        items = [],
        styles = {},
        colors = 'bg-light-fg-dark'
    } = props;

    const fieldPath = props['data-sb-field-path'];

    return (
        <section
            id={elementId}
            className={classNames(
                colors,
                styles?.self?.padding ? mapStyles({ padding: styles.self.padding }) : 'py-16',
                styles?.self?.margin ? mapStyles({ margin: styles.self.margin }) : undefined
            )}
            data-sb-field-path={fieldPath}
        >
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12">
                    {title && (
                        <h2 className="text-3xl font-semibold mb-2"
                            {...(fieldPath && { 'data-sb-field-path': '.title' })}
                        >
                            {title}
                        </h2>
                    )}

                    {subtitle && (
                        <p className="text-gray-500"
                            {...(fieldPath && { 'data-sb-field-path': '.subtitle' })}
                        >
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="text-center group cursor-pointer"
                            {...(fieldPath && { 'data-sb-field-path': `.items.${index}` })}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="mx-auto transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Title */}
                            <p className="mt-4 text-sm font-medium text-gray-700">
                                {item.title}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}