/**
 * Created by LG0812 on 2017/10/31.
 */
import {Component, OnInit} from '@angular/core';
import {Req} from "../../common/req";
import {MapService} from "../../service/map.service";

declare let BMap;
declare let commonUtils;

@Component({
  selector: 'supervise-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  map = null;

  constructor(private req: Req, private mapService: MapService) {
  }

  service: any = {
    type: 0,
    presentLoading: false,
    historyLoading: false,
    presetAllowLoadMore: true,
    histroyAllowLoadMore: true,
    presentAlarm: [{
      id: 1,
      orderNo: 'SH-001-01',
      businessType: '机场飞防',
      address: "空港立交",
      createTime: '2017-08-10 14:00:00',
      status: '待处理',
      lat: 120.42944,
      lng: 31.510969,
      distance: 700,
      s: -30,
      e: 90,
      count: 4,
      j: 180,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }],
    historyAlarm: [{
      id: 1,
      orderNo: 'SH-001-01',
      businessType: '机场飞防',
      address: "空港立交",
      createTime: '2017-08-10 14:00:00',
      status: '待处理',
      lat: 120.42458,
      lng: 31.487462,
      distance: 700,
      s: -30,
      e: 90,
      count: 2,
      j: 180,
      marker: null,
      overlay: null
    }, {
      id: 13,
      orderNo: 'SH-001-13',
      businessType: '机场飞防',
      createTime: '2017-06-12 10:00:40',
      status: '已解除管制',
      lat: 120.42944,
      lng: 31.510969,
      distance: 700,
      s: -20,
      e: 100,
      count: 5,
      j: 360,
      marker: null,
      overlay: null
    }]
  }

  ngOnInit(): void {
    this.initBmap();
    // this.initPresent();
  }

  initBmap() {
    console.log(BMap, "from ServiceComponent");
    this.map = new BMap.Map("serviceMap");
    // const point = new BMap.Point(116.404, 39.915);
    // this.map.centerAndZoom(point, 18);
    this.map.enableScrollWheelZoom(true);
    this.map.addControl(new BMap.NavigationControl());
    this.initPresent(true);
  }

  serviceType(type) {
    this.service.type = type;
    this.service.presentLoading = false;
    this.service.historyLoading = false;

    console.log(this.service.historyLoading)
    switch (type) {
      case 0:
        this.initPresent(true);
        break;
      case 1:
        this.initHistory(true);
        break;
    }
  }

  initPresent(clear) {
    console.log(this.service.presentAlarm.length)
    this.mapService.addPointByService(this.service.presentAlarm, this.map, clear);
  }

  initHistory(clear) {
    this.mapService.addPointByService(this.service.historyAlarm, this.map, clear);
  }

  searchHandler(params) {
    console.log(params);
  }

  onScroll(ev) {
    console.log(ev.srcElement.scrollTop, ev.srcElement.scrollHeight - ev.srcElement.clientHeight - ev.srcElement.scrollTop)
    if (this.service.type == 0) {
      if (ev.srcElement.scrollHeight - ev.srcElement.clientHeight - ev.srcElement.scrollTop < 40
        && ev.srcElement.scrollHeight - ev.srcElement.clientHeight - ev.srcElement.scrollTop > 0 && this.service.presetAllowLoadMore) {
        this.service.presetAllowLoadMore = false;
        this.service.presentLoading = true;
        setTimeout(() => {
          this.service.presetAllowLoadMore = true;
          this.service.presentLoading = false;
          for (let t = 0; t < 20; t++) {
            this.service.presentAlarm.push({
              id: 1,
              orderNo: 'SH-001-01',
              businessType: '机场飞防',
              address: "空港立交",
              createTime: '2017-08-10 14:00:00',
              status: '待处理',
              lat: 120.42944,
              lng: 31.510969,
              distance: 700,
              s: -30,
              e: 90,
              count: 4,
              j: 180,
              marker: null,
              overlay: null
            });
          }

          this.initPresent(false);
        }, 3000);
      }
    } else if (this.service.type == 1) {
      if (ev.srcElement.scrollHeight - ev.srcElement.clientHeight - ev.srcElement.scrollTop < 40
        && ev.srcElement.scrollHeight - ev.srcElement.clientHeight - ev.srcElement.scrollTop > 0 && this.service.histroyAllowLoadMore) {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>ss")
        this.service.histroyAllowLoadMore = false;
        this.service.historyLoading = true;
        setTimeout(() => {
          this.service.histroyAllowLoadMore = true;
          this.service.historyLoading = false;
          for (let t = 0; t < 20; t++) {
            this.service.presentAlarm.push({
              id: 1,
              orderNo: 'SH-001-01',
              businessType: '机场飞防',
              address: "空港立交",
              createTime: '2017-08-10 14:00:00',
              status: '待处理',
              lat: 120.42944,
              lng: 31.510969,
              distance: 700,
              s: -30,
              e: 90,
              count: 4,
              j: 180,
              marker: null,
              overlay: null
            });
          }

          this.initHistory(false);
        }, 3000);
      }
    }
  }

  getPosition(obj) {
    this.map.centerAndZoom(new BMap.Point(obj.lat, obj.lng), 14);
  }
}

