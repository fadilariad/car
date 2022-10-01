import { Directive, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver } from "@angular/cdk/layout";
import { BREAKPOINTS } from "@shared/constans";
import { Observable, Subject, takeUntil } from "rxjs";

@Directive({
  selector: '[appMediaClass]'
})
export class MediaClassDirective implements OnInit, OnDestroy {
  @HostBinding('class') device: string = '';
  breakpoints = [BREAKPOINTS.desktop, BREAKPOINTS.tablet, BREAKPOINTS.mobile]
  termination: Subject<null> = new Subject();
  terminate$: Observable<null> = this.termination.asObservable();

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  determineDevice() {
    this.breakpointObserver
      .observe(this.breakpoints)
      .pipe(takeUntil(this.terminate$))
      .subscribe((res) => {
        console.log(res)
        for (const query in res.breakpoints) {
          if (res.breakpoints[query]) {
            switch (query) {
              case BREAKPOINTS.desktop:
                this.device = 'desktop';
                break;
              case BREAKPOINTS.tablet:
                this.device = 'tablet';
                break;
              case BREAKPOINTS.mobile:
                this.device = 'mobile';
                break;
            }
          }
        }
      });
  }

  ngOnInit(): void {
    this.determineDevice();
  }

  ngOnDestroy(): void {
    this.termination.complete();
  }
}
