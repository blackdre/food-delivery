const FeaturedProducts = () => {
  return (
    <section>
      <div className='container'>
        <div className='row h-100 gx-2 mt-7'>
          <div className='col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4'>
            <div className='card card-span h-100'>
              <div className='position-relative'>
                {" "}
                <img
                  className='img-fluid rounded-3 w-100'
                  src='assets/img/gallery/discount-item-1.png'
                  alt='...'
                />
                <div className='card-actions'>
                  <div className='badge badge-foodwagon bg-primary p-4'>
                    <div className='d-flex flex-between-center'>
                      <div className='text-white fs-7'>15</div>
                      <div className='d-block text-white fs-2'>
                        % <br />
                        <div className='fw-normal fs-1 mt-2'>Off</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-body px-0'>
                <h5 className='fw-bold text-1000 text-truncate'>
                  Flat Hill Slingback
                </h5>
                <span className='badge bg-soft-danger py-2 px-3'>
                  <span className='fs-1 text-danger'>6 days Remaining</span>
                </span>
              </div>
              <a className='stretched-link' href='#'></a>
            </div>
          </div>
          <div className='col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4'>
            <div className='card card-span h-100'>
              <div className='position-relative'>
                {" "}
                <img
                  className='img-fluid rounded-3 w-100'
                  src='assets/img/gallery/discount-item-2.png'
                  alt='...'
                />
                <div className='card-actions'>
                  <div className='badge badge-foodwagon bg-primary p-4'>
                    <div className='d-flex flex-between-center'>
                      <div className='text-white fs-7'>10</div>
                      <div className='d-block text-white fs-2'>
                        % <br />
                        <div className='fw-normal fs-1 mt-2'>Off</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-body px-0'>
                <h5 className='fw-bold text-1000 text-truncate'>
                  Ocean Blue Ring
                </h5>
                <span className='badge bg-soft-danger py-2 px-3'>
                  <span className='fs-1 text-danger'>6 days Remaining</span>
                </span>
              </div>
              <a className='stretched-link' href='#'></a>
            </div>
          </div>
          <div className='col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4'>
            <div className='card card-span h-100'>
              <div className='position-relative'>
                {" "}
                <img
                  className='img-fluid rounded-3 w-100'
                  src='assets/img/gallery/discount-item-3.png'
                  alt='...'
                />
                <div className='card-actions'>
                  <div className='badge badge-foodwagon bg-primary p-4'>
                    <div className='d-flex flex-between-center'>
                      <div className='text-white fs-7'>25</div>
                      <div className='d-block text-white fs-2'>
                        % <br />
                        <div className='fw-normal fs-1 mt-2'>Off</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-body px-0'>
                <h5 className='fw-bold text-1000 text-truncate'>
                  Brown Leathered Wallet
                </h5>
                <span className='badge bg-soft-danger py-2 px-3'>
                  <span className='fs-1 text-danger'>6 days Remaining</span>
                </span>
              </div>
              <a className='stretched-link' href='#'></a>
            </div>
          </div>
          <div className='col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4'>
            <div className='card card-span h-100'>
              <div className='position-relative'>
                {" "}
                <img
                  className='img-fluid rounded-3 w-100'
                  src='assets/img/gallery/discount-item-4.png'
                  alt='...'
                />
                <div className='card-actions'>
                  <div className='badge badge-foodwagon bg-primary p-4'>
                    <div className='d-flex flex-between-center'>
                      <div className='text-white fs-7'>20</div>
                      <div className='d-block text-white fs-2'>
                        % <br />
                        <div className='fw-normal fs-1 mt-2'>Off</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-body px-0'>
                <h5 className='fw-bold text-1000 text-truncate'>
                  Silverside Wristwatch
                </h5>
                <span className='badge bg-soft-danger py-2 px-3'>
                  <span className='fs-1 text-danger'>6 days Remaining</span>
                </span>
              </div>
              <a className='stretched-link' href='#'></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
