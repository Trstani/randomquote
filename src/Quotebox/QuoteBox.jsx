import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/faQuoteLeft';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons/faQuoteRight';
import { faTumblr } from '@fortawesome/free-brands-svg-icons/faTumblr';

function QuoteBox({quote,author,onChangeQuote,color}){
     const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;

    return(
        <>
            <div id="quote-box" style={{width:"500px", margin:"40px auto", minHeight:"300px", display:"flex", flexDirection:"column", justifyContent:"space-between", padding:"2rem", textAlign:"left", backgroundColor:"white", boxShadow:"rgba(0, 0, 0, 0.24) 4px 3px 8px" ,borderRadius:"4rem"}}>
                <div id="quote" style={{height:"220px", display:"flex", margin:"10px"}}>
                    <h2 id="text" style={{textAlign:"left", color:color,}}><FontAwesomeIcon icon={faQuoteLeft} size='30' style={{margin:"0 8px",color:color}}/>{quote}<FontAwesomeIcon icon={faQuoteRight} size='30' style={{margin:"0 8px",color:color}}/></h2>
                </div>
                <h4 id="author" style={{fontSize:"1.125rem", color:color}}>- {author}</h4>

                <div id="buttons" style={{display:"flex", justifyContent:"space-between"}}>
                    <div id="lbtn" style={{display:"flex", gap:"2px"}}>
                        <a href={tweetUrl} id="tweet-quote" target="_blank" rel="noopener noreferrer" style={{margin:"20px 2px", color:"white", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"fit-content", height:"50px",borderRadius:"5px",backgroundColor:color}}><FontAwesomeIcon icon={faTwitter} size='20' style={{padding:"1rem"}}/></a>
                        <a href="#" id="tumblr-quote" style={{margin:"20px 2px", color:"white" ,boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"fit-content",height:"50px" ,borderRadius:"5px", backgroundColor:color}}><FontAwesomeIcon icon={faTumblr} size='20' style={{padding:"1rem"}}/></a>
                    </div>
                     <button id="new-quote" onClick={onChangeQuote} style={{padding:"1rem",width:"fit-content",backgroundColor:color, margin:"20px",textDecoration:"none",color:"white",borderRadius:"4px",cursor:"pointer",border:"none"}}>Change Quote</button>
                      
                    
                </div>
            </div>
        </>


    );
}

export default QuoteBox

