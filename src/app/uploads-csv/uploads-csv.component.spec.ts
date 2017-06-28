import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadsCsvComponent } from './uploads-csv.component';

describe('UploadsCsvComponent', () => {
  let component: UploadsCsvComponent;
  let fixture: ComponentFixture<UploadsCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadsCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadsCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
