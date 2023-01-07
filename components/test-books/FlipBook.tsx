import { useState } from 'react'
import styles from './FlipBook.module.scss'
export default function FlipBook(props:any){

    return(
        <div className={styles.wrapper}>
            {JSON.stringify(props.flip)}
            <div className={styles.page+" "+styles.page1} id="page1"><div className={styles.content}></div></div>
            <div className={styles.page} id="page2" style={{left:"left:578px"}}><div className={styles.content}></div></div>
            <div className={styles.page} id="page3" style={{left:"left:578px"}}><div className={styles.content}></div></div>
            <div className={styles.page} id="page4" style={{left:"left:578px"}}><div className={styles.content}></div></div>
            <div className={styles.page} id="page5" style={{left:"left:578px"}}><div className={styles.content}></div></div>
            <div className={styles.page} id="page6" style={{left:"left:578px"}}><div className={styles.content}></div></div>
            <div className={styles.page+" "+styles.page7} style={{left:"left:578px"}}><div className={styles.content}></div></div>
            <div className={styles.flipwrap}>
                <div className={styles.flipper+" "+(props.flip?styles.flipIt:"")}>
                </div>
            </div>
        </div>
    )
}

// $(document).ready(function() {
//     ///VARIABLES
//     var flipItem = $('#flipper'),
//         page = $('.page'),
//         flipWrap = $('#flipwrap');

//     function flipFunction() {
//         flipItem.addClass('flip-it');
//         setTimeout(function() {
//             $('.flip-it').removeClass('flip-it');
//         },800);
//     }

//     flipWrap.bind('click', flipFunction);


// });