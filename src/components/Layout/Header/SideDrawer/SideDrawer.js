import classes from './SideDrawer.module.css';

const SideDrawer = ({ children }) => {
    return (
        <aside className={classes['side-drawer']}>
            {children}
        </aside>
    );
};

export default SideDrawer;