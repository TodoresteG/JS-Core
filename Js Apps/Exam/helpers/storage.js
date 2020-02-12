const storage = function() {
    
    const appKey = 'kid_rkaonNNQS';
    const appSecret = 'c0275f10231a4e2b917982845dffa16b';

    const getData = function(key) {
        return localStorage.getItem(key);
    };

    const saveData = function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const saveUser = function(data) {
        saveData('userInfo', data);
        saveData('authToken', data._kmd.authtoken);
        saveData('boughtProducts', { products: 0 });
    };

    const deleteUser = function() {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('authToken');
        localStorage.removeItem('boughtProducts');
    };

    return {
        appKey,
        appSecret,
        getData,
        saveData,
        saveUser,
        deleteUser
    };
}();