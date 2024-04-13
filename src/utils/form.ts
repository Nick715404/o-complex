interface IResponse {
  success: null | number,
  error: string
}

export const handleResponse = (response: IResponse, setStatus: any) => {
  if (response) {
    setStatus(response);
    localStorage.clear();

    if (response.success === 1) {
      setTimeout(() => {
        setStatus({ success: null, error: '' });
      }, 3000);
      setTimeout(() => {
        window.location.reload();
      }, 1800);
    }

    if (response.success === 0) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }

  }
}