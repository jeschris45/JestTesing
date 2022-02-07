import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule, TestRequest } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { IndependentService } from './independent.service';


describe('IndependentService', () => {
  let httpTestingController: HttpTestingController;
  let independentService: IndependentService;
  const ngUnsubscribe: Subject<any> = new Subject();

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, HttpClientModule],
    providers: [IndependentService],
    teardown: { destroyAfterEach: false }
});
    // Returns a service with the MockBackend
    independentService = TestBed.inject(IndependentService);
    // Inject the http service and test controller for each test
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  test('dummyTest', () => {
    expect(true).toEqual(true);
  })
});
