import React from "react";

const LocationSvg = () => {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-primary"
    >
      <path
        d="M32.2034 16.3809L21.3343 20.7284C21.1976 20.7832 21.0734 20.8652 20.9693 20.9693C20.8652 21.0734 20.7832 21.1976 20.7284 21.3343L16.3809 32.2034C16.301 32.4015 16.281 32.6187 16.3236 32.828C16.3662 33.0373 16.4695 33.2295 16.6205 33.3805C16.7716 33.5315 16.9637 33.6348 17.173 33.6774C17.3823 33.72 17.5995 33.7001 17.7976 33.6201L28.6668 29.2726C28.8034 29.2178 28.9276 29.1358 29.0317 29.0317C29.1358 28.9276 29.2178 28.8034 29.2726 28.6668L33.6201 17.7976C33.7001 17.5995 33.72 17.3823 33.6774 17.173C33.6348 16.9637 33.5315 16.7716 33.3805 16.6205C33.2295 16.4695 33.0373 16.3662 32.828 16.3236C32.6187 16.281 32.4015 16.301 32.2034 16.3809ZM27.4226 27.4234L19.3393 30.6568L22.5726 22.5734L30.6559 19.3401L27.4226 27.4234Z"
        fill="currentColor"
      ></path>
      <path
        d="M48.9155 23.916H45.5989C45.327 18.8284 43.1834 14.0211 39.5805 10.4188C35.9776 6.81645 31.1698 4.67369 26.0822 4.40269V1.08269C26.0822 0.794376 25.9677 0.517872 25.7638 0.314005C25.5599 0.110137 25.2834 -0.00439453 24.9951 -0.00439453C24.7068 -0.00439453 24.4303 0.110137 24.2264 0.314005C24.0226 0.517872 23.908 0.794376 23.908 1.08269V4.39936C18.8218 4.6732 14.0164 6.81763 10.4157 10.4203C6.81498 14.023 4.67322 18.8297 4.4022 23.916H1.0822C0.793888 23.916 0.517384 24.0306 0.313517 24.2344C0.109649 24.4383 -0.00488281 24.7148 -0.00488281 25.0031C-0.00488281 25.2914 0.109649 25.5679 0.313517 25.7718C0.517384 25.9757 0.793888 26.0902 1.0822 26.0902H4.39887C4.67271 31.1764 6.81714 35.9818 10.4198 39.5825C14.0225 43.1832 18.8292 45.325 23.9155 45.596V48.916C23.9155 49.2043 24.0301 49.4808 24.2339 49.6847C24.4378 49.8886 24.7143 50.0031 25.0026 50.0031C25.2909 50.0031 25.5674 49.8886 25.7713 49.6847C25.9752 49.4808 26.0897 49.2043 26.0897 48.916V45.5994C31.1753 45.3267 35.9806 43.1839 39.582 39.5828C43.1834 35.9817 45.3266 31.1766 45.5997 26.091H48.9155C49.2038 26.091 49.4804 25.9765 49.6842 25.7726C49.8881 25.5688 50.0026 25.2923 50.0026 25.0039C50.0026 24.7156 49.8881 24.4391 49.6842 24.2353C49.4804 24.0314 49.2038 23.9169 48.9155 23.9169V23.916ZM40.2164 26.0877H43.4222C43.1519 30.5965 41.239 34.85 38.0451 38.0439C34.8512 41.2378 30.5977 43.1508 26.0889 43.421V40.2169C26.0889 39.9285 25.9743 39.652 25.7705 39.4482C25.5666 39.2443 25.2901 39.1298 25.0018 39.1298C24.7135 39.1298 24.437 39.2443 24.2331 39.4482C24.0292 39.652 23.9147 39.9285 23.9147 40.2169V43.4227C19.406 43.1521 15.1527 41.239 11.9589 38.0452C8.76505 34.8513 6.85199 30.598 6.58137 26.0894H9.7872C10.0755 26.0894 10.352 25.9748 10.5559 25.771C10.7598 25.5671 10.8743 25.2906 10.8743 25.0023C10.8743 24.714 10.7598 24.4375 10.5559 24.2336C10.352 24.0297 10.0755 23.9152 9.7872 23.9152H6.57637C6.84663 19.4064 8.75958 15.1529 11.9535 11.959C15.1474 8.76507 19.4009 6.85212 23.9097 6.58186V9.78769C23.9097 10.076 24.0242 10.3525 24.2281 10.5564C24.432 10.7602 24.7085 10.8748 24.9968 10.8748C25.2851 10.8748 25.5616 10.7602 25.7655 10.5564C25.9693 10.3525 26.0839 10.076 26.0839 9.78769V6.57686C30.5925 6.84747 34.8458 8.76054 38.0397 11.9544C41.2335 15.1482 43.1466 19.4015 43.4172 23.9102H40.2164C39.9281 23.9102 39.6516 24.0247 39.4477 24.2286C39.2438 24.4325 39.1293 24.709 39.1293 24.9973C39.1293 25.2856 39.2438 25.5621 39.4477 25.766C39.6516 25.9698 39.9281 26.0844 40.2164 26.0844V26.0877Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default LocationSvg;
