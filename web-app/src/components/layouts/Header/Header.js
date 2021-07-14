import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Headers = function() {
    return (
        <Fragment>
            <div className={styles['header']}>
                <img href="#!"></img>
                <h1><center>đây là trang web</center></h1>
                <nav>
                    <ul className={styles['nav-link']}>
                        <li><Link to ="/">Trang chủ</Link></li>
                        <li><Link to ="/exam">Đề thi</Link></li>
                        <li><Link to ="/practice">Đề luyện tập</Link></li>
                        <li><Link to ="/course">Khóa học</Link></li>
                        <li><Link to ="/contact">liên hệ</Link></li>
                        <li><Link to ="/quest">hỏi đáp</Link></li>
                        <li><Link to ="/login">Đăng nhập</Link></li>
                    </ul>
                </nav>
            </div>
        </Fragment>
      )
}

export default Headers;
