import React from 'react';
import { UseTheme, UseThemeUpdate } from '../routes/ThemeContext';
import { useSelector, useDispatch } from 'react-redux';
import { IncrementAction } from '../redux/actions/increment.action';

export default function App() {
    const darkTheme = UseTheme();
    const darkThemeToggle = UseThemeUpdate();
    const { count } = useSelector((state) => state.CurrentCount);
    const dispatch = useDispatch();

    const AppTheme = darkTheme
        ? { background: 'black', height: '100vh', color: 'white' }
        : { background: 'white', height: '100vh', color: 'black' };

    const handleIncrement = () => dispatch(IncrementAction());

    return (
        <div className="container my-4" style={AppTheme}>
            <div className="card p-4">
                <h3 className="">Hello world</h3>
                <h4 className="">Count: {count}</h4>
                <br />
                <div className="row">
                    <div className="col-sm-2">
                        <button
                            className="btn btn-sm btn-primary"
                            onClick={darkThemeToggle}
                        >
                            Click me !!!
                        </button>
                    </div>
                    <div className="col-sm-2">
                        <button
                            className="btn btn-sm btn-secondary"
                            onClick={handleIncrement}
                        >
                            Increment !!!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
