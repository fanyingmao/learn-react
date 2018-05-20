// Flex.js
// Created by fanyingmao 五月/20/2018
//
import {Row, Col} from 'antd';
import {connect} from 'dva';
import styles from './Flex.less'
const Flex = () => {

  return (
    <div className="gutter-example">
      <div>
        <Row>
          <Col span={8} className={styles["gutter-box"]}>col-8</Col>
          <Col span={8} offset={3} className={styles["gutter-box"]}>col-8</Col>
        </Row>
        <Row>
          <Col span={6} offset={6} className={styles["gutter-box"]}>col-6 col-offset-6</Col>
          <Col span={6} offset={6} className={styles["gutter-box"]}>col-6 col-offset-6</Col>
        </Row>
        <Row>
          <Col span={12} offset={6} className={styles["gutter-box"]}>col-12 col-offset-6</Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col span={18} push={6} className={styles["gutter2-box"]}>col-18 col-push-6</Col>
          <Col span={6} pull={6} push={6} className={styles["gutter-box"]}>col-6 col-pull-18</Col>
        </Row>
      </div>
      <div>
        <p>sub-element align left</p>
        <Row type="flex" justify="start">
          <Col span={4} className={styles["gutter-box"]}>col-4</Col>
          <Col span={4} className={styles["gutter-box"]} >col-4</Col>
          <Col span={4} className={styles["gutter-box"]} >col-4</Col>
          <Col span={4} className={styles["gutter-box"]} >col-4</Col>
        </Row>

        <p>sub-element align center</p>
        <Row type="flex" justify="center">
          <Col span={4} className={styles["gutter-box"]}>col-4</Col>
          <Col span={4} className={styles["gutter-box"]}>col-4</Col>
          <Col span={4} className={styles["gutter-box"]}>col-4</Col>
          <Col span={4} className={styles["gutter-box"]}>col-4</Col>
        </Row>

        <p>sub-element align right</p>
        <Row type="flex" justify="end">
          <Col span={4} className={styles["gutter-box"]}>col-4</Col>
          <Col span={4} className={styles["gutter-box"]}>col-4</Col>
          <Col span={4} className={styles["gutter-box"]}>col-4</Col>
          <Col span={4} className={styles["gutter-box"]}>col-4</Col>
        </Row>

        <p>sub-element monospaced arrangement</p>
        <Row type="flex" justify="space-between">
          <Col span={4} className={styles["gutter-box"]}>col-4</Col>
          <Col span={4} className={styles["gutter-box"]}>col-4</Col>
          <Col span={4} className={styles["gutter-box"]}>col-4</Col>
          <Col span={4} className={styles["gutter-box"]}>col-4</Col>
        </Row>

        <p>sub-element align full</p>
        <Row type="flex" justify="space-around">
          <Col span={4} className={styles["gutter-box"]}>col-4</Col>
          <Col span={4} className={styles["gutter-box"]}>col-4</Col>
          <Col span={4} className={styles["gutter-box"]}>col-4</Col>
          <Col span={4} className={styles["gutter-box"]}>col-4</Col>
        </Row>
      </div>
    </div>);
};


export default connect()(Flex);
