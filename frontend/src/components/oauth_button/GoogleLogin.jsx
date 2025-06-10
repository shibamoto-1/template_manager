export default function GoogleLogin() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const originUrl = encodeURIComponent(`${import.meta.env.TEMPLATE_URL}`); 
  
  return (
    <a
      href={`${baseUrl}/api/v1/auth/google_oauth2?auth_origin_url=${originUrl}`}
      className="btn btn-primary"
    >
      Googleログイン
    </a>
  );
}

