// hooks/useIsTouchDevice.js
import { useState, useEffect } from 'react';

export function useIsTouchDevice() {
    const [isTouch, setIsTouch] = useState(null);

    useEffect(() => {
        // 1. Проверка через media query (наиболее надёжно для современных браузеров)
        const touchQuery = window.matchMedia('(pointer: coarse)');
        setIsTouch(touchQuery.matches);

        // 2. Дополнительно: проверка на наличие TouchEvent (для старых браузеров)
        const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouch === null) {
            setIsTouch(hasTouch);
        }

        // Обновляем при изменении
        const handleChange = (e) => {
            setIsTouch(e.matches);
        };

        touchQuery.addEventListener('change', handleChange);
        return () => {
            touchQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return isTouch;
}