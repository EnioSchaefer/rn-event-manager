const validateEmail = (email: string): boolean => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!email) return false;

  if (!emailRegex.test(email)) return false;

  return true;
}

const validatePassword = (password: string) => {
  if (!password) return false;

  if (password.length < 7) return false;

  return true;
}