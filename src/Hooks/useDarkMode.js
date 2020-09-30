import {useState} from 'react';
import {useLocalStorage} from './useLocalStorage';

export default function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
    return [darkMode, setDarkMode];
}

