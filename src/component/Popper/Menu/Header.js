import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <div className={cx('header')}>
            <button className={cx('back-btn')}>
                <FontAwesomeIcon onClick={onBack} icon={faChevronCircleLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </div>
    );
}

export default Header;
