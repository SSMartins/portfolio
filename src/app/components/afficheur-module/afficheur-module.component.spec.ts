import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheurModuleComponent } from './afficheur-module.component';

describe('AfficheurModuleComponent', () => {
  let component: AfficheurModuleComponent;
  let fixture: ComponentFixture<AfficheurModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheurModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheurModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
