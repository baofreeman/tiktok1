import styles from './Account.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Account() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/bb158a4f0db62a50dcfbbe8fc626ae62~c5_300x300.webp?x-expires=1672819200&x-signature=UngtWxzrYHp3bHR3dSDVRqKtXXk%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default Account;
