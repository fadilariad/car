import { ChangeDetectorRef, Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { BreakpointObserver } from "@angular/cdk/layout";
import { BreakpointName, BREAKPOINTS } from "@shared/constans";


@Directive({
  selector: '[appMedia]'
})
export class MediaDirective implements OnInit{
  @Input('appMedia') breakpoints: BreakpointName[] = ['desktop', 'tablet', 'mobile'];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.breakpointObserver.observe(this.breakpoints.map(d => BREAKPOINTS[d])).subscribe(
      (res) => {
        this.viewContainer.clear();
        if (res.matches) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
        this.cd.detectChanges();
      }
    );
  }
}
