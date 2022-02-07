import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule, TestRequest } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { DependentService } from './dependent.service';


describe('DependentService', () => {
  let httpTestingController: HttpTestingController;
  let dependentService: DependentService;
  const ngUnsubscribe: Subject<any> = new Subject();

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, HttpClientModule],
    providers: [DependentService],
    teardown: { destroyAfterEach: false }
});
    // Returns a service with the MockBackend
    dependentService = TestBed.inject(DependentService);
    // Inject the http service and test controller for each test
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  test('dummyTest', () => {
    expect(true).toEqual(true);
  })
});
