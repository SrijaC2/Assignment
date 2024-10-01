# Finding the Constant Term of the Polynomial

## Lagrange Interpolation Formula

The Lagrange interpolation formula is given by:

`L(x) = Σ[yi * Li(x)]`

Where:
- `L(x)` is the interpolating polynomial.
- `y_i` is the y-coordinate of the `i`-th point.
- `L_i(x)` is the `i`-th Lagrange basis polynomial, defined as:

    `Li(x) = Π[j ≠ i] (x - xj) / (xi - xj)`

## Calculating the Constant Term

The constant term of a polynomial is the coefficient of the `x^0` term. In Lagrange interpolation, the constant term can be obtained by evaluating `L(0)`

`L(0) = Σ[yi * Li(0)]`



### Final Result

After applying the Lagrange interpolation on the given points, the constant term `C` is calculated.


