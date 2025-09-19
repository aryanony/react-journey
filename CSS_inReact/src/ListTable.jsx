import React from 'react';
import styles from './ListTable.module.css';

const ListTable = () => {
    return (
        <div className={styles.moduleCss}>
            <h2>Module CSS</h2>
            <table>
                <thead>
                    <tr className={styles.head}>
                        <th>Product Name</th>
                        <th>Key Features</th>
                        <th>Specifications</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={`${styles.lapBG} ${styles.trTXT}`}>
                        <td>Laptop A</td>
                        <td>
                            <ul>
                                <li>Fast Processor</li>
                                <li>High-Resolution Display</li>
                                <li>Long Battery Life</li>
                            </ul>
                        </td>
                        <td>
                            <ol>
                                <li>CPU: Intel i7</li>
                                <li>RAM: 16GB</li>
                                <li>Storage: 512GB SSD</li>
                            </ol>
                        </td>
                    </tr>
                    <tr className={`${styles.mobBG} ${styles.trTXT}`}>
                        <td>Smartphone B</td>
                        <td>
                            <ul>
                                <li>Advanced Camera System</li>
                                <li>Water Resistant</li>
                                <li>Wireless Charging</li>
                            </ul>
                        </td>
                        <td>
                            <ol>
                                <li>Display: OLED 6.1"</li>
                                <li>Camera: 48MP</li>
                                <li>Battery: 4000mAh</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListTable;