/** Helper functions for LocalStorage Connection to  Redux Store*/

/**
 * Save Redux state as Json to LocalStorage
 * @param state
 */
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};

/**
 *
 * @returns {undefined} || {object} || {array}
 */
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};