import instaReel from "../../assets/insta-reel.jpg";

export default function InstagramCard() {
  return (
    <a
      href="https://www.instagram.com/reel/C5ieG-tvBLP/?l=1"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl shadow-lg w-full max-w-sm mx-auto overflow-hidden hover:shadow-xl transition max-h-[520px]"
    >
      {/* Instagram Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <img
              src={instaReel}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold leading-none">
              kaka_ki_rasoi
            </p>
            <p className="text-xs text-gray-500">
              Original audio
            </p>
          </div>
        </div>

        <span className="text-blue-600 text-sm font-semibold">
          View profile
        </span>
      </div>

      {/* Reel Preview */}
      <div className="relative h-[420px] bg-black">
        <img
          src={instaReel}
          alt="Instagram Reel"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Simple Instagram Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="w-14 h-14 text-white"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3">
        {/* Action Icons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Heart */}
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 21s-7.5-4.6-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6c-2 4.4-9.5 9-9.5 9z" />
            </svg>

            {/* Comment */}
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z" />
            </svg>

            {/* Share */}
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2l-7 20-4-9-9-4z" />
            </svg>
          </div>

          {/* Bookmark */}
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M6 3h12v18l-6-4-6 4z" />
          </svg>
        </div>

        {/* Likes */}
        <p className="text-sm font-semibold mt-2">
          25 likes
        </p>

        <p className="text-blue-600 text-sm mt-2">
          View more on Instagram
        </p>
      </div>
    </a>
  );
}
