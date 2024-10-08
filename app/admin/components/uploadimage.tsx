"use client"
import { useState } from 'react';

export default function UploadImage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Dosya seçildiğinde çağrılacak fonksiyon
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);

    // Önizleme için dosya URL'sini oluştur
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    } else {
      setPreviewUrl(null);
    }
  };

  // // Dosyayı yükle butonuna tıklandığında çağrılacak fonksiyon
  // const handleUpload = async () => {
  //   if (!selectedFile) {
  //     setError('Lütfen bir dosya seçin.');
  //     return;
  //   }
  //   setUploading(true);
  //   setError(null);
  //   const formData = new FormData();
  //   formData.append('file', selectedFile);
  //   formData.append('id', '1');
  //   try {
  //     const response = await fetch('/api/product/File', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     const data = await response.json();
  //     if (response.ok) {
  //       setUploadedUrl(data.url);
  //     } else {
  //       setError(data.error || 'Dosya yüklenemedi.');
  //     }
  //   } catch (err) {
  //     setError('Dosya yüklenirken bir hata oluştu.');
  //   } finally {
  //     setUploading(false);
  //   }
  // };

  return (
    <>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h1>Dosya Yükle</h1>
        <input type="file" onChange={handleFileChange} />
        {/* <button onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Yükleniyor...' : 'Yükle'}
        </button> */}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {uploadedUrl && (
          <div>
            <h2>Yükleme Başarılı!</h2>
            <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">
              Yüklenen Dosyayı Görüntüle
            </a>
          </div>
        )}
      </div>

      {/* Önizleme alanı */}
      {previewUrl && (
        <div style={{ marginLeft: '20px' }}>
          <h2>Önizleme</h2>
          <img src={previewUrl} alt="Seçilen dosya" style={{ width: '200px', height: 'auto' }} />
        </div>
      )}
    </div>
   </>

  );
}
