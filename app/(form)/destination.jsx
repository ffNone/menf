 
import { useEffect, useState } from "react";

export default function DestinationForm() {
  useEffect(() => {
    const iframe = document.getElementById('destinationFormIframe');
    iframe.height = iframe.contentWindow.document.body.scrollHeight+"px";
    function handleMessage(event) {
      const iframe = document.getElementById('destinationFormIframe');
      if (iframe) {
        if (event.data.type === 'resize' && event.data.height) {
          iframe.style.height = `${event.data.height}px`;
        } else if (event.data.type === 'reset') {
          iframe.style.height = `${event.data.height}px`;
        }
      }
    }
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div style={{ overflow: 'visible' }}>
      <iframe
 
        id="destinationFormIframe"
 
        allowFullScreen
        src="./destinations"
        style={{
          border: 'none',
          width: '100%',
 
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}