function whatFood(mealtime) {
    let food = '';

    if (mealtime === 'breakfasttime') {
        food = 'egg';
    } else if (mealtime === 'lunchtime') {
        food = 'vegetable'
    } else if (mealtime === 'dinnertime') {
        food = 'fruit'
    } else {
        food = 'cookie'
    }

    return food;
}

function whatFood(mealtime) {
    let food = '';

    switch (mealtime) {
        case 'breakfasttime':
            food = 'egg';
            break;
        case 'lunchtime':
            food = 'vegetable';
            break;
        case 'dinnertime':
            food = 'fruit';
            break;
        default:
            food = 'cookie';
    }

    return food;
}

function whatFood(mealtime) {

    const food = {
        breakfasttime: 'egg',
        lunchtime: 'vegetable',
        dinnertime: 'fruit'
    }

    return food[mealtime] ? food[mealtime] : 'cookie';
}