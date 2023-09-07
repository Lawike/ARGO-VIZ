import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ArgoSceneComponent } from './ArgoScene.component';

describe('ArgoSceneComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [ArgoSceneComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ArgoSceneComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dummy-angular'`, () => {
    const fixture = TestBed.createComponent(ArgoSceneComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dummy-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ArgoSceneComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('dummy-angular app is running!');
  });
});
