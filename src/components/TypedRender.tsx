'use client'
import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export default function TypedRender() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['我叫廉志远，来自河南洛阳，一名Web Developer。'],
            typeSpeed: 80,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <span ref={el} />
    );
}