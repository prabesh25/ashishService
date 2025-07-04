// import React from 'react'

// const Button = ({text, primaryColor, hoverColor, onClick, style, }) => {
//   return (
//         <button onClick={onClick}
//         //   onMouseEnter={(e) =>
//         //     (e.currentTarget.style.backgroundColor = "var(--color-hover)")
//         //   }
//         //   onMouseLeave={(e) =>
//         //     (e.currentTarget.style.backgroundColor = "var(--color-first)")
//         //   }
//         //   style={{ backgroundColor: {background} }}
//           className={style}
//         >
//           {text}
//         </button>
//   )
// }


// export default Button;











import React from 'react';

const Button = ({ text, onClick, styling, style }) => {
  return (
    <button
      onClick={onClick}
      style={{ background: "var(--color-btnColor)" }}
      className={`transition-all duration-300 transform hover:scale-80 hover:text-xl ${styling} `}
    >
      {text}
    </button>
  );
};

export default Button;
