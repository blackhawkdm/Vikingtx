export default function MapEmbed() {
  return (
    <div className="w-full rounded-lg overflow-hidden border border-viking-border h-64 sm:h-80">
      <iframe
        title="Viking Inc. location — 2700 I-20 West, Odessa, TX"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.0!2d-102.4!3d31.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fb32d8d8bfffff%3A0x0!2s2700+I-20+W%2C+Odessa%2C+TX+79763!5e0!3m2!1sen!2sus!4v1"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
