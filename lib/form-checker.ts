export const validateEmail = (email: string): string | undefined => {
    if (!email) {
        return 'Email is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Enter a valid email address';
    }

    return undefined;
};

export const validatePassword = (password: string): string | undefined => {
    if (!password) {
        return 'Password is required';
    }

    if (password.length < 6) {
        return 'Password must be at least 6 characters';
    }

    const hasNumber = /\d/;
    if (!hasNumber.test(password)) {
        return 'Password must contain at least one number';
    }

    return undefined;
};
