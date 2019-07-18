'use strict';

import getApple from './apples';
import test from 'tape';
import Apple from './apples';

test(t => {
    let apple: Apple = new Apple();
    t.equals(apple.getApple(), 'apple');
    t.equals(apple.getApple(), 'urulek');
    t.end();
})
    