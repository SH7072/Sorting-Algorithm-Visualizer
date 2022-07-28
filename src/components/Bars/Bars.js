import React, { useEffect,useState } from "react";
import './Bars.css'

function Bars({ bars, compare, sorted, swap }) {

    const [width, setWidth] = useState(Math.min(20, Math.ceil(window.innerWidth / bars.length) - 5));

    const color = bars.length <= 50 && bars.length >= 10 ? '#ff0000' : '#00ff00';

    useEffect(() => {
        const handleResize = () => {
            setWidth(Math.min(10, Math.ceil(window.innerWidth / bars.length) - 5));
        }
        window.addEventListener('resize', handleResize);
        setWidth(Math.min(10, Math.ceil(window.innerWidth / bars.length) - 5));
    }, [bars.length]);

    return (
        <div className="barsWid">
            {bars.map((bar, i) => {
                const height = bar * 500 / bars.length;
                let bg = 'turquoise';

                if (compare && i === compare[0] || i === compare[1]) {
                    bg = 'red';
                }
                if (swap && i === swap[0] || i === swap[1]) {
                    bg = 'yellow';
                }
                if (sorted && sorted.includes(i)) {
                    bg = 'green';

                }
                const style = {
                    height: height,
                    backgroundColor: bg,
                    width: width,
                    color: color
                }
                return <div key={i} className='bars' style={style}>{bars}</div>
            })}
        </div>
    );
}
export default Bars;